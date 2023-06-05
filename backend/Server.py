import cherrypy
from Wrapper import Wrapper

@cherrypy.expose
class Server():
    def __init__(self):
        self._w = Wrapper()

    @cherrypy.tools.json_in()
    @cherrypy.tools.json_out()
    def GET(self, tabella):
        if not tabella:
            cherrypy.response.status = 404
            return {"errore": "Necessario nome tabella"}
        if tabella.lower() == "acquario": return self._w.visuaAcquario()
        elif tabella.lower() == "personale": return self._w.visuaPersonale()
        elif tabella.lower() == "interventi": return self._w.visuaInterventi()
        elif tabella.lower() == "isemplice": return self._w.visuaISemplice()
        else:
            cherrypy.response.status = 404
            return {"errore": "Tabella non trovata"}

    @cherrypy.tools.json_in()
    @cherrypy.tools.json_out()
    def POST(self):
        data = cherrypy.request.json
        print(data)
        tabella = data["tabella"]
        data.pop("tabella")
        if tabella == "personale":
            dati = (data["nome"], data["cognome"], data["email"], data["telefono"], data["idacquario"])
            res = self._w.insertPersonale(dati)
            return {"esito": res}
        elif tabella == "interventi":
            dati = (data["dataora"], data["nota"], data["report"])
            res = self._w.insertIntevento(dati)
            return {"esito": res}
        elif tabella == "isemplice":
            dati = (data["idintervento"], data["idpersonale"])
            res = self._w.insertISemplice(dati)
            return {"esito": res}
        else:
            cherrypy.response.status = 400
            return {"errore": "tabella non prevista"}
        
conf = {
    '/': {
        'request.dispatch': cherrypy.dispatch.MethodDispatcher(),
        'tools.sessions.on': True,
        'tools.response_headers.on': True,
        'tools.response_headers.headers': {
            ('Access-Control-Allow-Origin', '*'), 
            ('Access-Control-Allow-Headers', '*'),
            ('Access-Control-Allow-Headers', 'X-Requested-With')
        }
    }
}  

cherrypy.quickstart(Server(), '/', conf)
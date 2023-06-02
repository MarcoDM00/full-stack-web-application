import pymssql

class  Wrapper:
    def __init__(self):
        #5.172.64.20
        #192.168.40.16
        self.server = "5.172.64.20\SQLEXPRESS"
        self.user = "CRD2122"
        self.password = "xxx123##"
        self.db = "CRD2122"
    
    def connetti(self):
        try:
            return pymssql.connect(self.server, self.user, self.password, self.db)
        except :
            print("errore connessione")
        
    def disconnetti(self, conn):
        #disconnessione 
        try:
            conn.close()
        except:
            print("errore disconnessione")
            return 0
        
    def visuaAcquario(self):
        con = self.connetti()
        try:
            cur = con.cursor(as_dict=True)
            query = "SELECT * FROM V_Acquario"
            cur.execute(query)
            res = cur.fetchall()
            self.disconnetti(con)
            return res
        except Exception as e:
            print(e)
            self.disconnetti(con)
            return []
        
    def visuaPersonale(self):
        con = self.connetti()
        try:
            cur = con.cursor(as_dict=True)
            query = "SELECT * FROM V_Personale"
            cur.execute(query)
            res = cur.fetchall()
            self.disconnetti(con)
            return res
        except Exception as e:
            print(e)
            self.disconnetti(con)
            return []

    def visuaInterventi(self):
        con = self.connetti()
        try:
            cur = con.cursor(as_dict=True)
            query = "SELECT * FROM V_Interventi"
            cur.execute(query)
            res = cur.fetchall()
            self.disconnetti(con)
            for x in res:
                x["DataOra"] = str(x["DataOra"])
            return res
        except Exception as e:
            print(e)
            self.disconnetti(con)
            return []
        
    def visuaISemplice(self):
        con = self.connetti()
        try:
            cur = con.cursor(as_dict=True)
            query = "SELECT * FROM V_ISemplice"
            cur.execute(query)
            res = cur.fetchall()
            self.disconnetti(con)
            return res
        except Exception as e:
            print(e)
            self.disconnetti(con)
            return []
        
    def insertPersonale(self, dati):
        con = self.connetti()
        try:
            cur = con.cursor(as_dict=True)
            query = "INSERT INTO V_Personale VALUES (%s, %s, %s, %s, %d)"
            cur.execute(query, dati)
            con.commit()
            self.disconnetti(con)
            return 1
        except Exception as e:
            print(e)
            self.disconnetti(con)
            return 0
        
    def insertIntevento(self, dati):
        con = self.connetti()
        try:
            cur = con.cursor(as_dict=True)
            query = "INSERT INTO V_Interventi VALUES (%s, %s, %s)"
            cur.execute(query, dati)
            con.commit()
            self.disconnetti(con)
            return 1
        except Exception as e:
            print(e)
            self.disconnetti(con)
            return 0
        
    def insertISemplice(self, dati):
        con = self.connetti()
        try:
            cur = con.cursor(as_dict=True)
            query = "INSERT INTO V_ISemplice VALUES (%d, %d)"
            cur.execute(query, dati)
            con.commit()
            self.disconnetti(con)
            return 1
        except Exception as e:
            print(e)
            self.disconnetti(con)
            return 0
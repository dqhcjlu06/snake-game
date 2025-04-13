package network

import (
	"log"
	"net/http"

	"github.com/gorilla/websocket"
)

type Wsx struct {
	context_mgr *ConnectionManager
}

func newWsX(mgr *ConnectionManager) *Wsx {
	return &Wsx{
		context_mgr: mgr,
	}
}

func (wsx *Wsx) listenAndServe(relPath string, port string) error {
	var ud = &websocket.Upgrader{
		// cross-area
		CheckOrigin: func(r *http.Request) bool {
			return true
		},
	}
	http.HandleFunc(relPath, func(w http.ResponseWriter, r *http.Request) {
		conn, e := ud.Upgrade(w, r, w.Header())
		if e != nil {
			log.Default().Printf("HandleFunc Error %v", e)
			w.WriteHeader(500)
			w.Write([]byte(e.Error()))
			return
		}
		log.Default().Printf("HandleFunc Success RemoteAddr: %s", conn.RemoteAddr())
		_, err := wsx.context_mgr.newWsConnection(conn)
		if err != nil {
			log.Default().Printf("Wsx NewWsContext error %v", err)
		}
	})
	log.Default().Printf("ws begin to listen %s", port)
	e := http.ListenAndServe(port, nil)
	if e != nil {
		log.Default().Printf("ws start server failed Error<%s>", e.Error())
	}
	return e
}

func (wsx *Wsx) listenAndServeLTS(relPath string, port string, certFile string, keyFile string) error {
	var ud = &websocket.Upgrader{
		// cross-area
		CheckOrigin: func(r *http.Request) bool {
			return true
		},
	}
	http.HandleFunc(relPath, func(w http.ResponseWriter, r *http.Request) {
		conn, e := ud.Upgrade(w, r, w.Header())
		if e != nil {
			log.Default().Printf("HandleFunc Error %v", e)
			w.WriteHeader(500)
			w.Write([]byte(e.Error()))
			return
		}
		log.Default().Printf("HandleFunc Success RemoteAddr: %s", conn.RemoteAddr())
		_, err := wsx.context_mgr.newWsConnection(conn)
		if err != nil {
			log.Default().Printf("Wsx NewWsContext error %v", err)
		}
	})
	log.Default().Printf("ws begin to listen %s", port)
	e := http.ListenAndServeTLS(port, certFile, keyFile, nil)
	if e != nil {
		log.Default().Printf("ws start server failed Error<%s>", e.Error())
	}
	return e
}

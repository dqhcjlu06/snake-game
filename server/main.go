package main

import (
	"log"
	"os"
	"os/signal"
	"syscall"

	"com.cocos/kcp/commands"
	"com.cocos/kcp/network"
)

func main() {
	sigc := make(chan os.Signal, 1)
	signal.Notify(sigc, syscall.SIGINT, syscall.SIGTERM)

	srv := network.NewServer()
	commands.Register(srv)

	go func() {
		// ws server
		err := srv.ListenAndServeWsx("/ws", ":8080", "", "")
		if err != nil {
			panic(err)
		}
	}()

	go func() {
		// kcp server
		err := srv.ListenAndServeKcpX(":8081", 2, 2)
		if err != nil {
			panic(err)
		}
	}()

	log.Default().Println("server start successful")
	c := <-sigc
	log.Default().Printf("server stop by signal %v\n", c)
}

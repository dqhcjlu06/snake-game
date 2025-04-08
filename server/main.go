package main

import (
	"log"
	"os"
	"os/signal"
	"syscall"
)

func main() {
	sigc := make(chan os.Signal, 1)
	signal.Notify(sigc, syscall.SIGINT, syscall.SIGTERM)

	c := <-sigc
	log.Default().Printf("server stop by signal %v\n", c)
}

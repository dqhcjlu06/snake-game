package commands

import "com.cocos/kcp/network"

func Register(srv *network.Server) {
	register_login_cmd(srv)
}

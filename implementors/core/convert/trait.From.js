(function() {var implementors = {};
implementors["socket2"] = ["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/net/addr/struct.SocketAddrV4.html\" title=\"struct std::net::addr::SocketAddrV4\">SocketAddrV4</a>&gt; for <a class=\"struct\" href=\"socket2/struct.SockAddr.html\" title=\"struct socket2::SockAddr\">SockAddr</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/net/addr/struct.SocketAddrV6.html\" title=\"struct std::net::addr::SocketAddrV6\">SocketAddrV6</a>&gt; for <a class=\"struct\" href=\"socket2/struct.SockAddr.html\" title=\"struct socket2::SockAddr\">SockAddr</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/std/net/addr/enum.SocketAddr.html\" title=\"enum std::net::addr::SocketAddr\">SocketAddr</a>&gt; for <a class=\"struct\" href=\"socket2/struct.SockAddr.html\" title=\"struct socket2::SockAddr\">SockAddr</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/net/tcp/struct.TcpStream.html\" title=\"struct std::net::tcp::TcpStream\">TcpStream</a>&gt; for <a class=\"struct\" href=\"socket2/struct.Socket.html\" title=\"struct socket2::Socket\">Socket</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/net/tcp/struct.TcpListener.html\" title=\"struct std::net::tcp::TcpListener\">TcpListener</a>&gt; for <a class=\"struct\" href=\"socket2/struct.Socket.html\" title=\"struct socket2::Socket\">Socket</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/net/udp/struct.UdpSocket.html\" title=\"struct std::net::udp::UdpSocket\">UdpSocket</a>&gt; for <a class=\"struct\" href=\"socket2/struct.Socket.html\" title=\"struct socket2::Socket\">Socket</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/sys/unix/ext/net/struct.UnixStream.html\" title=\"struct std::sys::unix::ext::net::UnixStream\">UnixStream</a>&gt; for <a class=\"struct\" href=\"socket2/struct.Socket.html\" title=\"struct socket2::Socket\">Socket</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/sys/unix/ext/net/struct.UnixListener.html\" title=\"struct std::sys::unix::ext::net::UnixListener\">UnixListener</a>&gt; for <a class=\"struct\" href=\"socket2/struct.Socket.html\" title=\"struct socket2::Socket\">Socket</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/sys/unix/ext/net/struct.UnixDatagram.html\" title=\"struct std::sys::unix::ext::net::UnixDatagram\">UnixDatagram</a>&gt; for <a class=\"struct\" href=\"socket2/struct.Socket.html\" title=\"struct socket2::Socket\">Socket</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"socket2/struct.Socket.html\" title=\"struct socket2::Socket\">Socket</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/net/tcp/struct.TcpStream.html\" title=\"struct std::net::tcp::TcpStream\">TcpStream</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"socket2/struct.Socket.html\" title=\"struct socket2::Socket\">Socket</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/net/tcp/struct.TcpListener.html\" title=\"struct std::net::tcp::TcpListener\">TcpListener</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"socket2/struct.Socket.html\" title=\"struct socket2::Socket\">Socket</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/net/udp/struct.UdpSocket.html\" title=\"struct std::net::udp::UdpSocket\">UdpSocket</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"socket2/struct.Socket.html\" title=\"struct socket2::Socket\">Socket</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/sys/unix/ext/net/struct.UnixStream.html\" title=\"struct std::sys::unix::ext::net::UnixStream\">UnixStream</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"socket2/struct.Socket.html\" title=\"struct socket2::Socket\">Socket</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/sys/unix/ext/net/struct.UnixListener.html\" title=\"struct std::sys::unix::ext::net::UnixListener\">UnixListener</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"socket2/struct.Socket.html\" title=\"struct socket2::Socket\">Socket</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/std/sys/unix/ext/net/struct.UnixDatagram.html\" title=\"struct std::sys::unix::ext::net::UnixDatagram\">UnixDatagram</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>&gt; for <a class=\"struct\" href=\"socket2/struct.Domain.html\" title=\"struct socket2::Domain\">Domain</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"socket2/struct.Domain.html\" title=\"struct socket2::Domain\">Domain</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>&gt; for <a class=\"struct\" href=\"socket2/struct.Type.html\" title=\"struct socket2::Type\">Type</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"socket2/struct.Type.html\" title=\"struct socket2::Type\">Type</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>&gt; for <a class=\"struct\" href=\"socket2/struct.Protocol.html\" title=\"struct socket2::Protocol\">Protocol</a>","impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"socket2/struct.Protocol.html\" title=\"struct socket2::Protocol\">Protocol</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i32.html\">i32</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()

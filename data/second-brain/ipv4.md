# IPv4

- 32 bits
- Written as four decimal numbers called octets
  - Octet --> 8 bits
  - Each octet can be any number from 0 to 255
- Divided into two parts
  - Network ID
  - Host ID

## Private IPs

- A company can use private IPs on its private networks
- IEEE recommends the following:
  - `10.0.0.0` through `10.255.255.255.255`
  - `172.16.0.0` through `172.31.255.255`
  - `192.168.0.0` through `192.168.255.255`

## Classes

- Dividing line between network and host portions is determined by numerical range IP address falls in
- Class A, B, and C are available for use on the [[internet]]
  - Public IP addresses
- Classes D and E are not available for general use:
  - Class D begins with octets 224-239 --> use for multicasting
  - Class E begins with octets 240-254 --> used for research

| Class | Network octets                 | Octet Range | Default Mask    | Approx. number of possible networks | Approx. number of IP aπddresses in each network |
| ----- | ------------------------------ | ----------- | --------------- | ----------------------------------- | ----------------------------------------------- |
| A     | `1.x.y.z` to `126.x.y.z`       | 1-126       | `255.0.0.0`     | 126                                 | 16 million                                      |
| B     | `128.0.x.y` to `191.255.x.y`   | 128-191     | `255.255.0.0`   | 16,000                              | 65,000                                          |
| C     | `192.0.0.x` to `223.255.255.x` | 192-223     | `255.255.255.0` | 2 million                           | 254                                             |

## Reserved IPs

| IP Address(es)                          | Function                                                                                                                                                    |
| --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `255.255.255.255`                       | Used to broadcast messages by TCP/IP background processes. Message is read by every node on the network.                                                    |
| `0.0.0.0`                               | Unassigned                                                                                                                                                  |
| `127.0.0.1` through `127.255.255.254`   | Uses for research or your own [[computer]] (loopback address)                                                                                               |
| `169.254.0.1` through `169.254.255.254` | Used to create APIPA address when a [[computer]] configured for DHCP first connects to the network and is unable to lease an IPv4 address from DHCP server. |

## Subnet Calculations

- [[Subnetting]]
  - Alters the rules of classful IPv4 addressing
  - Called **classless addressing**
- Borrow bits that would represent host information in classful addressing and use those bits to represent network information
  - Increase number of bits available for the [[network ID]]
    - Increase the number of [[network]]s
  - Reduce number of bits available for identifying hosts
    - Reduce the number of usable host addresses in each [[network]]

[[Computer Science]] [[Networking]] [[IP Address]]


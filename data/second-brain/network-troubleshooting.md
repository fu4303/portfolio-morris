# Network Troubleshooting

## `ping`

- Packet Internet Groper
- Used to verify that TCP/IP is:
  - Installed
  - Bound to NIC
  - Configured correctly
  - Communicating with the network
- Sends out a signal called an echo request to another device
  - Other device responds with an echo reply
- ICMP
  - Internet Control Message Protocol
  - Protocol used by echo request/reply
  - Carries error messages and info about the network
- For IPv6
  - `ping6` on Linux
  - `ping -6` on Windows

## `ipconfig` (Windows)

- Shows current TCP/IP addressing and domain name info
- `ipconfig /all` shows complete summary

## `ifconfig` (Linux)

- Utility to view/manage TCP/IP settings

## `nslookup`

- Name space lookup
- Allows you to query [[DNS]] database from any [[computer]] on a network
  - Used to find host name of a device by specifying its [[IP address]] (or vice versa)
  - Useful for verifying a host is configured correctly
  - Useful for troubleshooting [[DNS]] resolution problems
- Reverse [[DNS]] lookup
  - Find host name of device whose IP address you know

## `dig` (Linux)

- Domain Information Groper
- Provides more detailed information than [`nslookup`](#nslookup)
- Uses more reliable sources of info to output its results

## `netstat`

- Displays [[TCP]]/[[IP]] stats and details about [[TCP]]/[[IP]] components/connections on a host
- Information that can be obtained:
  - Port on which [[TCP]]/[[IP]] service is running
  - Which network connections are currently established for client
  - How many messages have been handled by a network interface since activated
  - How many data errors have occurred on a particular network interface

## `tracert` (Windows)

- Uses [[ICMP]] echo requests to trace path from one networked node to another
- Identifying all intermediate hops between nodes
- Employs trail/error approach to discover nodes at each hop from source --> destination
  
## `traceroute` (Linux, Unix)

- Uses [[UDP]] messages to a random port on destination node (same concept as [`tracert`](#traceroute-linux-unix))
- Employs trail/error approach to discover nodes at each hop from source --> destination

[[Computer Science]] [[Networking]]


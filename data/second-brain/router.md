# Router

- Joins two or more networks
- Passes packets from one network to another
- Can do the following:
  - Connect dissimilar networks (LANs and WANs)
  - Interpret layer 3 ([[network layer]]) and layer 4 ([[transport layer]]) addressing
  - Determine the best path for data to follow from point A to point B
  - Reroute traffic if the path of first choice is down but another path is available
- May perform any of the following:
  - Filter broadcast transmissions
  - Prevent certain types of traffic from getting to a network
  - Support local/remote connectivity simultaneously
  - Provide high network fault tolerance through redundant components
    - Such as power supplies
  - Monitor network traffic and report stats
  - Diagnose internal connectivity problems and trigger alarms
- Act as a broadcast boundary
  - Don't forward broadcast traffic

## Routing Table

![Routers and routing tables](/assets/second-brain/2020-09-29-18-09-09.png)

- Database maintaining information about where hosts are located and the most efficient way to reach them
  - Routers rely on them to identify which router is the next hop to reach a particular destination host
- Contain [[IP address]]es and network masks that identify a network that a host or another router belongs to

## Routing Path Types

- Static routing
  - Network admins configure a routing table to direct messages along specific paths
- Dynamic routing
  - Automatically calculated paths between two networks
  - Maintains information in a routing table
  - Router can detect problems with failed/congested routes and reroutes messages through a different path

## Optimal Paths

- Routing protocols
  - Used by routers to communicate with each other to determine the best path
- Routers rate reliability and priority of a routing protocol's data based on:
  - Administrative distance (AD)
    - Number indicating protocol's reliability
  - Convergence time
    - Time it takes to recognize a best path in event of a change or outage
  - Overhead
    - Burden places on underlying network to support the protocol


[[Networking]] [[Computer Science]]


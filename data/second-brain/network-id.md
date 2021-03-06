# Network ID

- Calculated by the number of 1 bits are in a [[subnet mask]]
  - Example:
    - [[IP address]]: `192.168.123.132`
      - Binary: `11000000.10101000.01111011.1000010`
    - Subnet mask: `255.255.255.0`
      - Binary: `11111111.111111111.111111111.00000000`
    - Network ID: `192.168.123.0`

## Logical ANDing to Calculate a Network ID

- Computers combine the bits of a host's [[IP address]] and [[subnet mask]] to calculate the network ID

|        |                 | First Octet | Second Octet | Third Octet | Fourth Octet |                 |
| ------ | --------------- | ----------- | ------------ | ----------- | ------------ | --------------- |
|        | [[IP Address]]  | `11000000`  | `00100010`   | `01011001`  | `01111111`   | `192.34.89.127` |
| AND    | [[Subnet Mask]] | `11111111`  | `11111111`   | `11111111`  | `00000000`   | `255.255.255.0` |
| EQUALS | Network ID      | `11000000`  | `00100010`   | `01011001`  | `00000000`   | `192.34.89.0`   |

[[Networking]] [[Subnetting]] [[IP Address]]


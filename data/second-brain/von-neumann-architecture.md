# von Neumann Architecture

![von Neumann architecture](/assets/second-brain/2020-09-28-12-49-43.png)

## Origin

- Name honors [[John von Neumann]]
- Idea probably originated with J. Presper Eckert and John Mauchly

## Architecture

- Units processing information are separate from the units storing information
- Five components:
  - Memory unit ([[computer memory]])
    - Holds both data and instructions
  - [[Arithmetic logic unit]]
    - Capable of performing arithmetic and logic operations on data
    - Pairs with the [[control unit]] to make the [[cpu]]
  - Input unit
    - Moves data from outside world --> inside the [[computer]]
    - Keyboard, mouse, scanners, etc.
  - Output unit
    - Moves results from inside the [[computer]] --> outside world
    - Screens, printers, etc.
  - [[Control unit]]
    - Ensures all components work in concert
    - Pairs with the [[arithmetic logic unit]] to make the [[cpu]]

## Bus

![Data flow through a von Neumann machine](/assets/second-brain/2020-09-28-13-03-09.png)

- Components are connected by a _bus_
- Collection of wires
- Data travels through
- **Bus width** is the amount of bits a bus can simultaneously transfer
- Each bus has:
  - Address
    - Used to select memory location or device to which data will go or be taken from
  - Data
    - Flows over bus between CPU/memory/IO
  - Control
    - Used to manage flow of addresses and data

[[Computer Science]] [[Computing Systems]]


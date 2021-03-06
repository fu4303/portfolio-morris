# Control Unit

- Organizing force in a computer
  - Manages everything that is happening
- In charge of fetch-execute cycle
- Two special registers:
  - Instruction register (IR)
    - Contains instruction being executed
  - Program counter (PC)
    - Contains address of next instruction to be executed

## Fetch-Execute Cycle

![Fetch-execute Cycle](/assets/second-brain/2020-09-28-17-32-09.png)

- **Fetch** next instruction
  - Program counter contains address of next instruction to execute
  - Steps:
    1. Control unit goes to address specified in PC
    2. Copies contents
    3. Places copy in instruction register
    4. Instruction register now contains instruction to be executed
    5. PC updated to hold address of next instruction to be executed
       - Instructions are stored contiguously in memory
       - Adding number of bytes in current instruction to program counter should put the address of the next instruction into the PC
       - Control unit increments the PC
- **Decode** the instruction
  - Control unit must figure out what the instruction is
  - Decoded into control signals
- **Get** data if needed
- **Execute** the instruction
  - Involves sending signals to the [[arithmetic logic unit]] to carry out processing
  - When complete, cycle begins again

[[Computer Science]] [[von Neumann Architecture]]


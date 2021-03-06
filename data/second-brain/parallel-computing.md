# Parallel Computing

- Computers rely on interconnected CPUs and/or memory units
- Increase processing speed
- Four general forms
  - Bit level
    - Based on increasing word size of computer
    - 8-bit processor --> 16-bit processor, etc.
    - Increasing the word size reduces the number of operations on data values larger than the word size
    - Current trend is to use 64-bit processors
  - Instruction level
  - Data level
    - Single-instruction, multiple-data-stream (SIMD)
    - Single set of instructions can be run on different data sets at the same time
    - Relies on [[control unit]] directing multiple [[arithmetic logic unit]]s to carry out same operation
    - Effective when same process needs to be applied to many data sets
      - E.g. increasing the brightness of an image involves adding a value to every pixel
  - Task level
    - Multiple-instruction, multiple-data-stream (MIMD)
    - Different processors can execute different tasks on the same or different data set
    - Analogous to pipelining in a [[von Neumann architecture]]

[[Computer Science]]


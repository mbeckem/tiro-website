---
title: tiro::vm_settings
summary: Settings to control the construction of a virtual machine. 

---

# tiro::vm_settings



Settings to control the construction of a virtual machine. 
`#include "tiropp/vm.hpp"`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| std::function< void(std::string_view [message](/docs/api/namespaces/namespacetiro#function-message))> | **[print_stdout](/docs/api/classes/structtiro_1_1vm__settings#variable-print_stdout)** <br>Invoked by the vm to print a message to the standard output, e.g.  |

## Public Attributes Documentation

### variable print_stdout

```cpp
std::function< void(std::string_view message)> print_stdout;
```

Invoked by the vm to print a message to the standard output, e.g. 

when `std.print(...)` was called. The vm will print to the process's standard output when this function is not set. 


-------------------------------

Updated on  5 May 2021 at 11:21:35 CEST
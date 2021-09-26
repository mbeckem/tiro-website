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
| size&#95;t | **[page_size](/docs/api/classes/structtiro_1_1vm__settings#variable-page-size)** <br>The size (in bytes) of heap pages allocated by the virtual machine for the storage of most objects.  |
| std::function&lt; void(std::string&#95;view [message](/docs/api/namespaces/namespacetiro#function-message))&gt; | **[print_stdout](/docs/api/classes/structtiro_1_1vm__settings#variable-print-stdout)** <br>Invoked by the vm to print a message to the standard output, e.g.  |

## Public Attributes Documentation

### variable page_size

```cpp
size_t page_size = 0;
```

The size (in bytes) of heap pages allocated by the virtual machine for the storage of most objects. 

Must be a power of two between 2^16 and 2^24 or zero to use the default value.

Smaller pages waste less memory if only small workloads are to be expected. Larger page sizes can be more performant because fewer chunks need to be allocated for the same number of objects.

Note that objects that do not fit into a single page reasonably well will be allocated "on the side" using a separate allocation. 


### variable print_stdout

```cpp
std::function< void(std::string_view message)> print_stdout;
```

Invoked by the vm to print a message to the standard output, e.g. 

when `std.print(...)` was called. The vm will print to the process's standard output when this function is not set. 


-------------------------------

Updated on 2021-09-26 at 16:20:41 +0200
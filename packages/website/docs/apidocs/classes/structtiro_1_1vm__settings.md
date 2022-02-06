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
| size&#95;t | **[max_heap_size](/docs/api/classes/structtiro_1_1vm__settings#variable-max-heap-size)** <br>The maximum size (in bytes) that can be occupied by the virtual machine's heap.  |
| std::function&lt; void(std::string&#95;view [message](/docs/api/namespaces/namespacetiro#function-message))&gt; | **[print_stdout](/docs/api/classes/structtiro_1_1vm__settings#variable-print-stdout)** <br>Invoked by the vm to print a message to the standard output, e.g.  |
| bool | **[enable_panic_stack_traces](/docs/api/classes/structtiro_1_1vm__settings#variable-enable-panic-stack-traces)** <br>Set this to true to enable capturing of the current call stack trace when an exception is created during a panic.  |

## Public Attributes Documentation

### variable page_size

```cpp
size_t page_size = 0;
```

The size (in bytes) of heap pages allocated by the virtual machine for the storage of most objects. 

Must be a power of two between 2^16 and 2^24 or zero to use the default value.

Smaller pages waste less memory if only small workloads are to be expected. Larger page sizes can be more performant because fewer chunks need to be allocated for the same number of objects.

Note that objects that do not fit into a single page reasonably well will be allocated "on the side" using a separate allocation. 


### variable max_heap_size

```cpp
size_t max_heap_size = 0;
```

The maximum size (in bytes) that can be occupied by the virtual machine's heap. 

The virtual machine will throw out of memory errors if this limit is reached.

The default value (0) will apply a sane default memory limit. Use `std::numeric_limits<size_t>::max()` for an unconstrained heap size. 


### variable print_stdout

```cpp
std::function< void(std::string_view message)> print_stdout;
```

Invoked by the vm to print a message to the standard output, e.g. 

when `std.print(...)` was called. The vm will print to the process's standard output when this function is not set. 


### variable enable_panic_stack_traces

```cpp
bool enable_panic_stack_traces = false;
```

Set this to true to enable capturing of the current call stack trace when an exception is created during a panic. 

Capturing stack traces has a significant performance impact because many call frames on the call stack have to be visited. 


-------------------------------

Updated on 2022-02-06 at 18:52:25 +0100
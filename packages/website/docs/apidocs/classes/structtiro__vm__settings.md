---
title: tiro_vm_settings
summary: The tiro_vm_settings structure can be provided to tiro_vm_new as a configuration parameter. 

---

# tiro_vm_settings



The [tiro_vm_settings]() structure can be provided to `tiro_vm_new` as a configuration parameter.  [More...](#detailed-description)


`#include "tiro/vm.h"`

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| size&#95;t | **[page_size](/docs/api/classes/structtiro__vm__settings#variable-page-size)** <br>The size (in bytes) of heap pages allocated by the virtual machine for the storage of most objects.  |
| void &#42; | **[userdata](/docs/api/classes/structtiro__vm__settings#variable-userdata)** <br>Arbitrary user data that will be accessible by calling `[tiro_vm_userdata()]()`.  |
| void(&#42;)(tiro&#95;string&#95;t message, void &#42;userdata) | **[print_stdout](/docs/api/classes/structtiro__vm__settings#variable-print-stdout)** <br>This callback is invoked when the vm attempts to print to the standard output stream, for example when `std.print(...)` has been called.  |

## Detailed Description

```cpp
struct tiro_vm_settings;
```

The [tiro_vm_settings]() structure can be provided to `tiro_vm_new` as a configuration parameter. 

Use tiro_vm_settings_init to initialize this struct to default values. 

## Public Attributes Documentation

### variable page_size

```cpp
size_t page_size;
```

The size (in bytes) of heap pages allocated by the virtual machine for the storage of most objects. 

Must be a power of two between 2^16 and 2^24 or zero to use the default value.

Smaller pages waste less memory if only small workloads are to be expected. Larger page sizes can be more performant because fewer chunks need to be allocated for the same number of objects.

Note that objects that do not fit into a single page reasonably well will be allocated "on the side" using a separate allocation. 


### variable userdata

```cpp
void * userdata;
```

Arbitrary user data that will be accessible by calling `[tiro_vm_userdata()]()`. 

This value is never interpreted in any way. This value is NULL by default. 


### variable print_stdout

```cpp
void(*)(tiro_string_t message, void *userdata) print_stdout;
```

This callback is invoked when the vm attempts to print to the standard output stream, for example when `std.print(...)` has been called. 

**Parameters**: 

  * **message** The string to print. Not guaranteed to be null terminated. 
  * **userdata** The userdata pointer set in this settings instance. 


When this is set to NULL (the default), the message will be printed to the process's standard output.


-------------------------------

Updated on 2021-10-02 at 22:50:45 +0200
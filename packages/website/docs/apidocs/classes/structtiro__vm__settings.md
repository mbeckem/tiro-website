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
| void &#42; | **[userdata](/docs/api/classes/structtiro__vm__settings#variable-userdata)** <br>Arbitrary user data that will be accessible by calling `[tiro_vm_userdata()]()`.  |
| void(&#42;)(tiro&#95;string&#95;t message, void &#42;userdata) | **[print_stdout](/docs/api/classes/structtiro__vm__settings#variable-print-stdout)** <br>This callback is invoked when the vm attempts to print to the standard output stream, for example when `std.print(...)` has been called.  |

## Detailed Description

```cpp
struct tiro_vm_settings;
```

The [tiro_vm_settings]() structure can be provided to `tiro_vm_new` as a configuration parameter. 

Use tiro_vm_settings_init to initialize this struct to default values. 

## Public Attributes Documentation

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

Updated on 2021-09-26 at 12:54:42 +0200
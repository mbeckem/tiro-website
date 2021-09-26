---
title: tiro/vm.h
summary: Functions and type definitions for working with the tiro virtual machine. 

---

# tiro/vm.h

Functions and type definitions for working with the tiro virtual machine. 

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[tiro_vm_settings](/docs/api/classes/structtiro__vm__settings)** <br>The [tiro_vm_settings]() structure can be provided to `tiro_vm_new` as a configuration parameter.  |

## Types

|                | Name           |
| -------------- | -------------- |
| typedef struct [tiro&#95;vm&#95;settings](/docs/api/classes/structtiro&#95;&#95;vm&#95;&#95;settings) | **[tiro_vm_settings_t](/docs/api/files/vm_8h#typedef-tiro-vm-settings-t)** <br>The [tiro_vm_settings](/docs/api/classes/structtiro__vm__settings) structure can be provided to `tiro_vm_new` as a configuration parameter.  |

## Functions

|                | Name           |
| -------------- | -------------- |
| void | **[tiro_vm_settings_init](/docs/api/files/vm_8h#function-tiro-vm-settings-init)**([tiro&#95;vm&#95;settings&#95;t](/docs/api/files/vm&#95;8h#typedef-tiro-vm-settings-t) &#42; settings)<br>Initializes the given tiro settings object with default values.  |
| [tiro_vm_t](/docs/api/files/def_8h#typedef-tiro-vm-t) | **[tiro_vm_new](/docs/api/files/vm_8h#function-tiro-vm-new)**(const [tiro&#95;vm&#95;settings&#95;t](/docs/api/files/vm&#95;8h#typedef-tiro-vm-settings-t) &#42; settings, [tiro&#95;error&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-error-t) &#42; err)<br>Allocates a new virtual machine instance.  |
| void | **[tiro_vm_free](/docs/api/files/vm_8h#function-tiro-vm-free)**([tiro&#95;vm&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-vm-t) vm)<br>Free a virtual machine.  |
| void * | **[tiro_vm_userdata](/docs/api/files/vm_8h#function-tiro-vm-userdata)**([tiro&#95;vm&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-vm-t) vm)<br>Returns the userdata pointer that was passed in the settings struct during vm construction.  |
| size_t | **[tiro_vm_page_size](/docs/api/files/vm_8h#function-tiro-vm-page-size)**([tiro&#95;vm&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-vm-t) vm)<br>Returns the vm's page size.  |
| void | **[tiro_vm_load_std](/docs/api/files/vm_8h#function-tiro-vm-load-std)**([tiro&#95;vm&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-vm-t) vm, [tiro&#95;error&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-error-t) &#42; err)<br>Load the default modules provided by the runtime.  |
| void | **[tiro_vm_load_bytecode](/docs/api/files/vm_8h#function-tiro-vm-load-bytecode)**([tiro&#95;vm&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-vm-t) vm, [tiro&#95;module&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-module-t) module, [tiro&#95;error&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-error-t) &#42; err)<br>Loads the compiled module into the virtual machine.  |
| void | **[tiro_vm_load_module](/docs/api/files/vm_8h#function-tiro-vm-load-module)**([tiro&#95;vm&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-vm-t) vm, [tiro&#95;handle&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-handle-t) module, [tiro&#95;error&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-error-t) &#42; err)<br>Loads the given module object into the virtual machine.  |
| void | **[tiro_vm_get_export](/docs/api/files/vm_8h#function-tiro-vm-get-export)**([tiro&#95;vm&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-vm-t) vm, [tiro&#95;string&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-string-t) module_name, [tiro&#95;string&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-string-t) function_name, [tiro&#95;handle&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-handle-t) result, [tiro&#95;error&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-error-t) &#42; err)<br>Attempts to find the exported value with the given name in the specified module.  |
| void | **[tiro_vm_run_ready](/docs/api/files/vm_8h#function-tiro-vm-run-ready)**([tiro&#95;vm&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-vm-t) vm, [tiro&#95;error&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-error-t) &#42; err)<br>Runs all ready coroutines.  |
| bool | **[tiro_vm_has_ready](/docs/api/files/vm_8h#function-tiro-vm-has-ready)**([tiro&#95;vm&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-vm-t) vm)<br>Returns true if the virtual machine has at least one coroutine ready for execution, false otherwise.  |
| [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro-handle-t) | **[tiro_global_new](/docs/api/files/vm_8h#function-tiro-global-new)**([tiro&#95;vm&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-vm-t) vm, [tiro&#95;error&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-error-t) &#42; err)<br>Allocates a new global handle.  |
| void | **[tiro_global_free](/docs/api/files/vm_8h#function-tiro-global-free)**([tiro&#95;vm&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-vm-t) vm, [tiro&#95;handle&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-handle-t) global)<br>Frees a global handle allocated with `tiro_global_new`.  |

## Types Documentation

### typedef tiro_vm_settings_t

```cpp
typedef struct tiro_vm_settings tiro_vm_settings_t;
```

The [tiro_vm_settings](/docs/api/classes/structtiro__vm__settings) structure can be provided to `tiro_vm_new` as a configuration parameter. 

Use tiro_vm_settings_init to initialize this struct to default values. 



## Functions Documentation

### function tiro_vm_settings_init

```cpp
void tiro_vm_settings_init(
    tiro_vm_settings_t * settings
)
```

Initializes the given tiro settings object with default values. 

### function tiro_vm_new

```cpp
tiro_vm_t tiro_vm_new(
    const tiro_vm_settings_t * settings,
    tiro_error_t * err
)
```

Allocates a new virtual machine instance. 

Reads settings from the given `settings` objects, if it is not NULL. Otherwise uses default values.

Returns NULL on allocation failure. 


### function tiro_vm_free

```cpp
void tiro_vm_free(
    tiro_vm_t vm
)
```

Free a virtual machine. 

Must be called exactly once for every vm created with `tiro_vm_new`.

Does nothing if `vm` is NULL. 


### function tiro_vm_userdata

```cpp
void * tiro_vm_userdata(
    tiro_vm_t vm
)
```

Returns the userdata pointer that was passed in the settings struct during vm construction. 

### function tiro_vm_page_size

```cpp
size_t tiro_vm_page_size(
    tiro_vm_t vm
)
```

Returns the vm's page size. 

### function tiro_vm_load_std

```cpp
void tiro_vm_load_std(
    tiro_vm_t vm,
    tiro_error_t * err
)
```

Load the default modules provided by the runtime. 

TODO: Configuration? 


### function tiro_vm_load_bytecode

```cpp
void tiro_vm_load_bytecode(
    tiro_vm_t vm,
    tiro_module_t module,
    tiro_error_t * err
)
```

Loads the compiled module into the virtual machine. 

Note: this function does _not_ take ownership of the module parameter. 


### function tiro_vm_load_module

```cpp
void tiro_vm_load_module(
    tiro_vm_t vm,
    tiro_handle_t module,
    tiro_error_t * err
)
```

Loads the given module object into the virtual machine. 

Returns `TIRO_ERROR_MODULE_EXISTS` if a module with the same name already exists. Returns `TIRO_ERROR_BAD_TYPE` if the argument is not actually a module. 


### function tiro_vm_get_export

```cpp
void tiro_vm_get_export(
    tiro_vm_t vm,
    tiro_string_t module_name,
    tiro_string_t function_name,
    tiro_handle_t result,
    tiro_error_t * err
)
```

Attempts to find the exported value with the given name in the specified module. 

The found function value will be stored in the `result` handle, which must not be NULL.

Returns `TIRO_ERROR_MODULE_NOT_FOUND` if the specified module was not loaded. Returns `TIRO_ERROR_EXPORT_NOT_FOUND` if the module does not contain an exported member with that name. 


### function tiro_vm_run_ready

```cpp
void tiro_vm_run_ready(
    tiro_vm_t vm,
    tiro_error_t * err
)
```

Runs all ready coroutines. 

Returns (and does not block) when all coroutines are either waiting or done. 


### function tiro_vm_has_ready

```cpp
bool tiro_vm_has_ready(
    tiro_vm_t vm
)
```

Returns true if the virtual machine has at least one coroutine ready for execution, false otherwise. 

### function tiro_global_new

```cpp
tiro_handle_t tiro_global_new(
    tiro_vm_t vm,
    tiro_error_t * err
)
```

Allocates a new global handle. 

Global handles point to a single rooted object slot that can hold an arbitrary value. Slots are always initialized to null.

When a global handle is no longer required, it should be freed by calling `tiro_global_free`.

Returns NULL on allocation failure. 


### function tiro_global_free

```cpp
void tiro_global_free(
    tiro_vm_t vm,
    tiro_handle_t global
)
```

Frees a global handle allocated with `tiro_global_new`. 

Note: remaining globals are automatically freed when a vm is freed. 






-------------------------------

Updated on 2021-09-26 at 16:20:42 +0200

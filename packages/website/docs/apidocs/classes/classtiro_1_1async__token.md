---
title: tiro::async_token
summary: A token that can be used to resume a yielding coroutine. 

---

# tiro::async_token



A token that can be used to resume a yielding coroutine. 


`#include "tiropp/functions.hpp"`

## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[async_token](/docs/api/classes/classtiro_1_1async__token#function-async-token)**([tiro&#95;vm&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-vm-t) vm, [tiro&#95;async&#95;token&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-async-token-t) token) |
| | **[async_token](/docs/api/classes/classtiro_1_1async__token#function-async-token)**([async&#95;token](/docs/api/classes/classtiro&#95;1&#95;1async&#95;&#95;token) && ) =default |
| [async_token](/docs/api/classes/classtiro_1_1async__token) & | **[operator=](/docs/api/classes/classtiro_1_1async__token#function-operator=)**([async&#95;token](/docs/api/classes/classtiro&#95;1&#95;1async&#95;&#95;token) && ) =default |
| void | **[return_value](/docs/api/classes/classtiro_1_1async__token#function-return-value)**(const [handle](/docs/api/classes/classtiro&#95;1&#95;1handle) & value)<br>Resumes a yielding coroutine that was paused by calling yield from an async function call frame.  |
| void | **[panic_msg](/docs/api/classes/classtiro_1_1async__token#function-panic-msg)**(std::string&#95;view message)<br>Resumes a yielding coroutine that was paused by calling yield from an async function call frame.  |
| [tiro_vm_t](/docs/api/files/def_8h#typedef-tiro-vm-t) | **[raw_vm](/docs/api/classes/classtiro_1_1async__token#function-raw-vm)**() const |
| [tiro_async_token_t](/docs/api/files/def_8h#typedef-tiro-async-token-t) | **[raw_token](/docs/api/classes/classtiro_1_1async__token#function-raw-token)**() |

## Public Functions Documentation

### function async_token

```cpp
inline async_token(
    tiro_vm_t vm,
    tiro_async_token_t token
)
```


### function async_token

```cpp
async_token(
    async_token && 
) =default
```


### function operator=

```cpp
async_token & operator=(
    async_token && 
) =default
```


### function return_value

```cpp
inline void return_value(
    const handle & value
)
```

Resumes a yielding coroutine that was paused by calling yield from an async function call frame. 

The associated async function call will return with the given value. 


### function panic_msg

```cpp
inline void panic_msg(
    std::string_view message
)
```

Resumes a yielding coroutine that was paused by calling yield from an async function call frame. 

The associated async function call will panic with the given error message. 


### function raw_vm

```cpp
inline tiro_vm_t raw_vm() const
```


### function raw_token

```cpp
inline tiro_async_token_t raw_token()
```


-------------------------------

Updated on 2022-02-27 at 21:17:13 +0100
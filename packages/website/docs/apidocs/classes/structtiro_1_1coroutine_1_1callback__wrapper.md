---
title: tiro::coroutine::callback_wrapper

---

# tiro::coroutine::callback_wrapper



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| template <typename T \> <br>| **[callback_wrapper](/docs/api/classes/structtiro_1_1coroutine_1_1callback__wrapper#function-callback-wrapper)**(in&#95;place&#95;t , T && t) |
| | **[callback_wrapper](/docs/api/classes/structtiro_1_1coroutine_1_1callback__wrapper#function-callback-wrapper)**(callback&#95;wrapper && ) =delete |
| callback_wrapper & | **[operator=](/docs/api/classes/structtiro_1_1coroutine_1_1callback__wrapper#function-operator=)**(callback&#95;wrapper && ) =delete |
| void | **[invoke](/docs/api/classes/structtiro_1_1coroutine_1_1callback__wrapper#function-invoke)**([tiro&#95;vm&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-vm-t) raw_vm, [tiro&#95;handle&#95;t](/docs/api/files/def&#95;8h#typedef-tiro-handle-t) raw_coroutine, void &#42; userdata) |
| void | **[cleanup](/docs/api/classes/structtiro_1_1coroutine_1_1callback__wrapper#function-cleanup)**(void &#42; userdata) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| Callback | **[cb](/docs/api/classes/structtiro_1_1coroutine_1_1callback__wrapper#variable-cb)**  |

## Detailed Description

```cpp
template <typename Callback >
struct tiro::coroutine::callback_wrapper;
```

## Public Functions Documentation

### function callback_wrapper

```cpp
template <typename T >
inline callback_wrapper(
    in_place_t ,
    T && t
)
```


### function callback_wrapper

```cpp
callback_wrapper(
    callback_wrapper && 
) =delete
```


### function operator=

```cpp
callback_wrapper & operator=(
    callback_wrapper && 
) =delete
```


### function invoke

```cpp
static inline void invoke(
    tiro_vm_t raw_vm,
    tiro_handle_t raw_coroutine,
    void * userdata
)
```


### function cleanup

```cpp
static inline void cleanup(
    void * userdata
)
```


## Public Attributes Documentation

### variable cb

```cpp
Callback cb;
```


-------------------------------

Updated on 2021-09-26 at 12:54:42 +0200
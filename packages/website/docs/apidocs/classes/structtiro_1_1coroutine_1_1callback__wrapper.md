---
title: tiro::coroutine::callback_wrapper

---

# tiro::coroutine::callback_wrapper



 [More...](#detailed-description)

## Public Functions

|                | Name           |
| -------------- | -------------- |
| template <typename T \> <br>| **[callback_wrapper](/docs/api/classes/structtiro_1_1coroutine_1_1callback__wrapper#function-callback-wrapper)**(in_place_t , T && t) |
| | **[callback_wrapper](/docs/api/classes/structtiro_1_1coroutine_1_1callback__wrapper#function-callback-wrapper)**(callback_wrapper && ) =deleted |
| callback_wrapper & | **[operator=](/docs/api/classes/structtiro_1_1coroutine_1_1callback__wrapper#function-operator=)**(callback_wrapper && ) =deleted |
| void | **[invoke](/docs/api/classes/structtiro_1_1coroutine_1_1callback__wrapper#function-invoke)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro-vm-t) raw_vm, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro-handle-t) raw_coroutine, void * userdata) |
| void | **[cleanup](/docs/api/classes/structtiro_1_1coroutine_1_1callback__wrapper#function-cleanup)**(void * userdata) |

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
) =deleted
```


### function operator=

```cpp
callback_wrapper & operator=(
    callback_wrapper && 
) =deleted
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

Updated on 26 September 2021 at 09:32:12 CEST
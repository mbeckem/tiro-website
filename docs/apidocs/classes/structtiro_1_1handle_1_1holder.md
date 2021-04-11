---
title: tiro::handle::holder

---

# tiro::handle::holder



## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[~holder](/docs/api/classes/structtiro_1_1handle_1_1holder#function-~holder)**() |
| void | **[reset](/docs/api/classes/structtiro_1_1handle_1_1holder#function-reset)**() |
| holder & | **[operator=](/docs/api/classes/structtiro_1_1handle_1_1holder#function-operator=)**(holder && other) |
| | **[holder](/docs/api/classes/structtiro_1_1handle_1_1holder#function-holder)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm_, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) handle_) |
| | **[holder](/docs/api/classes/structtiro_1_1handle_1_1holder#function-holder)**(holder && other) |
| void | **[assign](/docs/api/classes/structtiro_1_1handle_1_1holder#function-assign)**([tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) h) |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) | **[vm](/docs/api/classes/structtiro_1_1handle_1_1holder#variable-vm)**  |
| [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) | **[handle](/docs/api/classes/structtiro_1_1handle_1_1holder#variable-handle)**  |

## Public Functions Documentation

### function ~holder

```cpp
inline ~holder()
```


### function reset

```cpp
inline void reset()
```


### function operator=

```cpp
inline holder & operator=(
    holder && other
)
```


### function holder

```cpp
inline holder(
    tiro_vm_t vm_,
    tiro_handle_t handle_
)
```


### function holder

```cpp
inline holder(
    holder && other
)
```


### function assign

```cpp
inline void assign(
    tiro_handle_t h
)
```


## Public Attributes Documentation

### variable vm

```cpp
tiro_vm_t vm;
```


### variable handle

```cpp
tiro_handle_t handle;
```


-------------------------------

Updated on 11 April 2021 at 12:05:09 CEST
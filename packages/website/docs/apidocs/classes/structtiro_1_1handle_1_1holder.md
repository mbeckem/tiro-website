---
title: tiro::handle::holder

---

# tiro::handle::holder





## Public Functions

|                | Name           |
| -------------- | -------------- |
| | **[holder](/docs/api/classes/structtiro_1_1handle_1_1holder#function-holder)**([tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) vm_, [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) handle_) |
| | **[holder](/docs/api/classes/structtiro_1_1handle_1_1holder#function-holder)**(holder && other) |
| | **[~holder](/docs/api/classes/structtiro_1_1handle_1_1holder#function-~holder)**() |
| holder & | **[operator=](/docs/api/classes/structtiro_1_1handle_1_1holder#function-operator=)**(holder && other) |
| void | **[assign](/docs/api/classes/structtiro_1_1handle_1_1holder#function-assign)**([tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) h) |
| void | **[reset](/docs/api/classes/structtiro_1_1handle_1_1holder#function-reset)**() |

## Public Attributes

|                | Name           |
| -------------- | -------------- |
| [tiro_vm_t](/docs/api/files/def_8h#typedef-tiro_vm_t) | **[vm](/docs/api/classes/structtiro_1_1handle_1_1holder#variable-vm)**  |
| [tiro_handle_t](/docs/api/files/def_8h#typedef-tiro_handle_t) | **[handle](/docs/api/classes/structtiro_1_1handle_1_1holder#variable-handle)**  |

## Public Functions Documentation

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


### function ~holder

```cpp
inline ~holder()
```


### function operator=

```cpp
inline holder & operator=(
    holder && other
)
```


### function assign

```cpp
inline void assign(
    tiro_handle_t h
)
```


### function reset

```cpp
inline void reset()
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

Updated on 24 July 2021 at 15:41:20 CEST
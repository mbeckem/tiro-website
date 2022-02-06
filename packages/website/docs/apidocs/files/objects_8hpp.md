---
title: tiropp/objects.hpp

---

# tiropp/objects.hpp



## Namespaces

| Name           |
| -------------- |
| **[tiro](/docs/api/namespaces/namespacetiro)**  |
| **[tiro::detail](/docs/api/namespaces/namespacetiro_1_1detail)**  |

## Classes

|                | Name           |
| -------------- | -------------- |
| struct | **[tiro::detail::type_to_value_kind](/docs/api/classes/structtiro_1_1detail_1_1type__to__value__kind)**  |
| class | **[tiro::bad_handle_cast](/docs/api/classes/classtiro_1_1bad__handle__cast)** <br>Thrown when an invalid cast is attempted.  |
| class | **[tiro::handle](/docs/api/classes/classtiro_1_1handle)** <br>A handle represents a reference to an object.  |
| class | **[tiro::null](/docs/api/classes/classtiro_1_1null)** <br>Refers to a null value.  |
| class | **[tiro::boolean](/docs/api/classes/classtiro_1_1boolean)** <br>Refers to a boolean value (true or false).  |
| class | **[tiro::integer](/docs/api/classes/classtiro_1_1integer)** <br>Refers to an integer value.  |
| class | **[tiro::float_](/docs/api/classes/classtiro_1_1float__)** <br>Refers to a float value.  |
| class | **[tiro::string](/docs/api/classes/classtiro_1_1string)** <br>Refers to a string value.  |
| class | **[tiro::function](/docs/api/classes/classtiro_1_1function)** <br>Refers to a function value.  |
| class | **[tiro::tuple](/docs/api/classes/classtiro_1_1tuple)** <br>Refers to a tuple value.  |
| class | **[tiro::record](/docs/api/classes/classtiro_1_1record)** <br>Refers to a record value.  |
| class | **[tiro::array](/docs/api/classes/classtiro_1_1array)** <br>Refers to an array value.  |
| class | **[tiro::result](/docs/api/classes/classtiro_1_1result)** <br>Refers to a result value.  |
| class | **[tiro::exception](/docs/api/classes/classtiro_1_1exception)** <br>Refers to an exception.  |
| class | **[tiro::coroutine](/docs/api/classes/classtiro_1_1coroutine)** <br>Refers to a coroutine.  |
| class | **[tiro::module](/docs/api/classes/classtiro_1_1module)** <br>Refers to a module.  |
| class | **[tiro::native](/docs/api/classes/classtiro_1_1native)** <br>Refers to a native object.  |
| class | **[tiro::type](/docs/api/classes/classtiro_1_1type)** <br>Refers to a type.  |

## Defines

|                | Name           |
| -------------- | -------------- |
|  | **[TIRO_MAP_TYPE](/docs/api/files/objects_8hpp#define-tiro-map-type)**(Type)  |




## Macros Documentation

### define TIRO_MAP_TYPE

```cpp
#define TIRO_MAP_TYPE(
    Type
)
    template<>                                               \
    struct type_to_value_kind<Type> {                        \
        static constexpr value_kind kind = value_kind::Type; \
    };
```




-------------------------------

Updated on 2022-02-06 at 18:52:25 +0100

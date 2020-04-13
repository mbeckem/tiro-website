#include <cstdio>

#include "nlohmann/json.hpp"

using json = nlohmann::json;

extern "C" int square(int x, int y) {
    return x * y;
}

int main() {
    json j = json::object();
    j["message"] = "Hello World!";
    std::puts(j.dump().c_str());
}

import preval from "next-plugin-preval";

const data = {
    foo: "bar",
    baz: "qux"
};
export default preval(data);

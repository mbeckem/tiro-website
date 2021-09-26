import { toString } from "mdast-util-to-string";
import { visit } from "unist-util-visit";
import slugImpl from "slug";

export function slugPlugin(): any {
    return (tree: any) => {
        const slugger = new Slugger();

        visit(tree, "heading", (node) => {
            const data = node.data || (node.data = {});
            const props = data.hProperties || (data.hProperties = {});
            let id = props.id;

            id = id ? slugger.slug(String(id)) : slugger.slug(toString(node));

            data.id = id;
            props.id = id;
        });
    };
}

slugImpl.defaults.charmap["_"] = "-";
const mode = slugImpl.defaults.modes["rfc3986"];

class Slugger {
    private occurrences = new Map<string, number>();

    slug(value: string): string {
        const originalSlug = slugImpl(value, mode);
        const occurrences = this.occurrences;
        let slug = originalSlug;
        while (occurrences.has(slug)) {
            occurrences.set(originalSlug, occurrences.get(originalSlug)! + 1);
            slug = originalSlug + "-" + occurrences.get(originalSlug)!;
        }
        occurrences.set(slug, 0);
        return slug;
    }
}

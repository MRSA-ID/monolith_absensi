import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
    return (
        links.length > 0 && (
            <div className="flex mt-8 space-x-2">
                {/* <div>
                </div> */}
                {links.map((link, index) => (
                    <Link
                        key={index}
                        href={link.url}
                        className={
                            link.active
                                ? "bg-gray-500 text-white px-4 py-2 border border-gray-500 rounded-md"
                                : "text-gray-500 hover:bg-gray-500 hover:text-white px-4 py-2 border rounded-md"
                        }
                        dangerouslySetInnerHTML={{ __html: link.label }}
                    />
                ))}
            </div>
        )
    );
}

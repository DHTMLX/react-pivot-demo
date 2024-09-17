import { useEffect, useRef } from "react";
import { Pivot } from "@dhx/trial-pivot";
import "@dhx/trial-pivot/dist/pivot.css";

export default function PivotComponent(props) {
	let container = useRef();

	useEffect(() => {
		const table = new Pivot(container.current, {
			fields: props.fields,
			data: props.dataset,
			headerShape: {
                collapsible: true
            },
            tableShape: {
                tree: true, // eslint-disable-next-line 
                templates: ["profit", "sales"].reduce((acc, field) => (acc[field] = v => (v ? Math.ceil(v) : ""), acc), {})
            },
            columnShape: {
                autoWidth: {
                    columns: {
                        type: true,
                        title: true
                    },
                    firstOnly: false
                }
            },
            config: {
                rows: ["state", "product_type"],
                columns: ["product_line", "type"],
                values: [
                    {
                        field: "profit",
                        method: "sum"
                    },
                    {
                        field: "sales",
                        method: "sum"
                    },
                    {
                        field: "date",
                        method: "min"
                    }
                ]
            }
            // other configuration properties
		});

		return () => {
			table.destructor();
		}
	});

	return <div ref={container} className="widget"></div>;
}

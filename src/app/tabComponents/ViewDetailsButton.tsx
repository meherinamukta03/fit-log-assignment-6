
import Link from "next/link";

interface IProps {
    id: number;
}

const ViewDetailsButton = ({ id }: IProps) => {
    return (
        <Link
            href={`/works/${id}`}
            className="flex w-full items-center justify-center rounded-full border border-[#30343c] px-3 py-1.5 text-[9px] text-gray-300 hover:text-white sm:w-auto"
        >
            View Details
        </Link>
    );
};

export default ViewDetailsButton;


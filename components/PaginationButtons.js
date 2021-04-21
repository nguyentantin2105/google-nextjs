import { useRouter } from "next/router";
import Link from "next/link";
import {ChevronLeftIcon, ChevronRightIcon} from "@heroicons/react/solid";

function PaginationButtons() {
    const router = useRouter();
    const startIndex = Number(router.query.start) || 0;
    return (
        <div className="flex items-center max-w-lg justify-between text-blue-500 mb-10">
            {startIndex >=10 && (
                <Link href={`/search?term=${router.query.term}&start=${startIndex -10}`}>
                    <div className="flex items-center flex-grow flex-col cursor-pointer hover:underline">
                        <ChevronLeftIcon className="h-4" />
                        <p>Previous</p>
                    </div>
                </Link>
            )}

            <Link href={`/search?term=${router.query.term}&start=${startIndex +10}`}>
                <div className="flex items-center flex-col flex-grow cursor-pointer hover:underline">
                    <ChevronRightIcon className="h-4"/>
                    <p>Next</p>
                </div>
            </Link>
        </div>
    )
}

export default PaginationButtons;

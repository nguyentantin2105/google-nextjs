import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../components/Header";
import SearchResults from "../components/SearchResults";
import {API_KEY, CONTEXT_KEY} from "../keys";
import Response from "../Response";

const Search = ({results}) => {
    const router = useRouter();
    return (
        <div>
            <Head>
                <title>{router.query.term} - Google Search</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
             
             {/* header */}
            <Header />  

            <SearchResults results={results} />
        </div>
    )
}

export default Search;

export async function getServerSideProps(context) {
    const useDummyData = false;
    const startIndex = context.query.start || '0';
     


    const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}`)
    .then(res => res.json());

    return {
        props: {
            results: data,
        }
    }
}
import { accounts } from "co-mission/data/accountsdata";

export default function Account({ accountData }) {
    return (
        <>
            <h1>{accountData.name}</h1>
        </>
    );
}

function getAccountIds() {
    return accounts.map((account) => {
        return {
            params: {
                id: account.id,
            },
        };
    });
}

export async function getStaticPaths() {
    const paths = getAccountIds();

    return {
        paths,
        fallback: false,
    };
}

function getAccountData(id) {
    return accounts.find((account) => account.id == id);
}

export async function getStaticProps({ params }) {
    const accountData = getAccountData(params.id);
    return {
        props: {
            accountData,
        },
    };
}

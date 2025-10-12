interface HeaderProps {
    title : string;
    subtitle: string;
}

const Header = ({title, subtitle} : HeaderProps) => {
    return (
        <>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        </>
    );
};

interface ListItemProps {
    text: string;
}

const ListItem = ({text} : ListItemProps) => {
    return <li>{text}</li>
}

interface ListProps {
    items: string[];
}

const List = ({items}: ListProps) => {
    return (
        <>
            <ul>
                {items.map((item) =>
                    <ListItem key={item} text={item} />

                )}
            </ul>
        </>
    );
};

interface FooterProps {
    copy: string;
    year: string;
}

const Footer = ({copy, year}: FooterProps) => {
    return (
        <>
            <p>&#169; {copy} {year}</p>
        </>
    )
}

function App() {

    let items : string[] = ["Item 1", "Item 2", "Item 3"]

  return (
    <>
        <Header title="Labo 2" subtitle="Components"/>
        <List items={items}/>
        <Footer copy="Trong Vo" year="2025"/>
    </>
  )
}

export default App

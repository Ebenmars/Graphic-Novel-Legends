export default function TabButton({children, onSelected}){
    return <li>
        <button onClick={onSelected}>{children}</button>
        </li>;
}
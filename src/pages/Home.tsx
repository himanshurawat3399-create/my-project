import {useEffect, useState} from "react";
import {Container, Spinner} from "@chakra-ui/react";
import TodoItem from "../components/TodoItem";
import type {Todo} from "../types/todo";

const Home: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        fetch("https://dummyjson.com/todos?limit=10&skip=0")
            .then((res) => res.json())
            .then((date) => {
                setTodos(date.todos);
                setLoading(false);
            }) ;
    }, []);

    if(loading) {
        return(
            <Container maxW="container.md" mt={6} className="flex justify-center">
                <Spinner size="xl"/>
            </Container>
        );
    }
    return(
        <Container maxW="container.md" mt={6}>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo}/>
            ))}
        </Container>
    );
};

export default Home;
import {useEffect, useState} from "react";
import {Container, Spinner} from "@chakra-ui/react";
import TodoItem from "../components/TodoItem";
import type {Todo} from "../types/todo";
import { Button, HStack } from "@chakra-ui/react";


const Home: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [page, setPage] = useState<number>(0);
    const limit = 10;
    type Filter = "all" | "completed" | "pending";
    const [filter, setFilter] = useState<Filter>("all");

    useEffect(() => {
        setLoading(true);
        fetch(`https://dummyjson.com/todos?limit=${limit}&skip=${page * limit}`)
            .then((res) => res.json())
            .then((date) => {
                setTodos(date.todos);
                setLoading(false);
            }) ;
    }, [page]);

    if(loading) {
        return(
            <Container maxW="container.md" mt={6} className="flex justify-center">
                <Spinner size="xl"/>
            </Container>
        );
    }

    const filteredTodos = todos.filter((t) => {
        if(filter === "all") return true;
        if(filter === "completed") return t.completed;
        return !t.completed;
    });

    return(
        <>
            <HStack gap={3} justifyContent="center" mb={4}>
                <Button
                    variant={filter === "all" ? "solid" : "outline"}
                    onClick={() => {setFilter("all"); setPage(0);}}>
                    All
                </Button>
                <Button
                    variant={filter === "completed" ? "solid" : "outline"}
                    onClick={() => {setFilter("completed"); setPage(0);}}>
                    Completed
                </Button>
                <Button
                    variant={filter === "pending" ? "solid" : "outline"}
                    onClick={() => {setFilter("pending"); setPage(0);}}
                    >
                    Pending
                </Button>
            </HStack>
        <Container maxW="container.md" mt={6}>
            {filteredTodos.map(todo => <TodoItem key={todo.id} todo={todo}/>)}
        </Container>

        <HStack justifyContent="center" mt={4} gap={4}>
            <Button
                onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
                disabled={page === 0}
                >
                Previous
            </Button>
            <Button onClick = {() => setPage((prev) => prev + 1)}
            disabled={todos.length < limit}
            >
                Next
            </Button>
        </HStack>
        </>
    );
};

export default Home;
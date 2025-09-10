import { Box, Text} from "@chakra-ui/react";
import { Checkbox } from "@chakra-ui/react"
import type {Todo} from "../types/todo";

interface TodoItemProps {
    todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({todo}) => {
    return(
        <Box p={4} mb={2} borderWidth="1px" borderRadius="lg" className="flex justify-between items-center">
            <Checkbox.Root checked={todo.completed}>
                <Checkbox.HiddenInput />
                <Checkbox.Control />
                <Checkbox.Label>{todo.todo}</Checkbox.Label>
            </Checkbox.Root>
                <Text fontSize="sm" color="gray.500">
                    User: {todo.userId}
                </Text>
        </Box>
    );
};

export default TodoItem;

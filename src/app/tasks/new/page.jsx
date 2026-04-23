import { AddATask } from "@/lib/actions";
import {
  Button,
  Form,
  Input,
  Label,
  ListBox,
  Select,
  TextField,
} from "@heroui/react";

const NewTaskPage = () => {
  return (
    <div className="w-1/2 mx-auto">
      <Form action={AddATask} className="flex flex-col gap-4">
        <TextField isRequired className="w-full" name="title" type="text">
          <Label>Title</Label>
          <Input placeholder="Enter your task title" />
        </TextField>
        <TextField className="w-full" name="description" type="text">
          <Label>Description</Label>
          <Input placeholder="Enter your task description" />
        </TextField>
        <Select name="status" className="w-[256px]" placeholder="Select one">
          <Label>Status</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="pending" textValue="Pending">
                Pending
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="completed" textValue="Completed">
                Completed
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="progress" textValue="Progress">
                Progress
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
        <Select name="priority" className="w-[256px]" placeholder="Select one">
          <Label>Priority</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="low" textValue="Low">
                Low
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="medium" textValue="Medium">
                Medium
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="high" textValue="High">
                High
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
        <TextField className="w-full" name="assignedTo">
          <Label>Assigned To</Label>
          <Input placeholder="Task assigned to" />
        </TextField>
        <Button slot="close" variant="secondary">
          Cancel
        </Button>
        <Button slot="close" type="submit">
          Submit Task
        </Button>
      </Form>
    </div>
  );
};

export default NewTaskPage;

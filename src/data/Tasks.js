import lists from "./Lists"
const tasks = [
  {
    id: 1,
    title: 'Complete CSE assignment',
    list: lists[2].listName,
    color: lists[2].listColor,
    icon: lists[2].listIcon,
    dueDate: '17 Feb 2022',
    status: false,
  },
  {
    id: 2,
    title: 'Go to gym',
    list: lists[0].listName,
    color: lists[0].listColor,
    icon: lists[0].listIcon,
    dueDate: '17 Feb 2022',
    status: false,
  },
  {
    id: 3,
    title: 'Fix navbar for website',
    list: lists[1].listName,
    color: lists[1].listColor,
    icon: lists[1].listIcon,
    dueDate: '17 Feb 2022',
    status: false,
  },
  {
    id: 4,
    title: 'Buy milk',
    list: lists[3].listName,
    color: lists[3].listColor,
    icon: lists[3].listIcon,
    dueDate: '17 Feb 2022',
    status: false,
  },
]
export default tasks;
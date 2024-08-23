"use client";

import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

import Image from "next/image";

const PlusIcon = ({ size = 24, width, height, ...props }) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}>
      <path d="M6 12h12" />
      <path d="M12 18V6" />
    </g>
  </svg>
);

const VerticalDotsIcon = ({ size = 24, width, height, ...props }) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <path
      d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 12c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
      fill="currentColor"
    />
  </svg>
);

const SearchIcon = (props) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...props}
  >
    <path
      d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
    <path d="M22 22L20 20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
  </svg>
);

const ChevronDownIcon = ({ strokeWidth = 1.5, ...otherProps }) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height="1em"
    role="presentation"
    viewBox="0 0 24 24"
    width="1em"
    {...otherProps}
  >
    <path
      d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={strokeWidth}
    />
  </svg>
);

const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "IMAGE", uid: "image" },
  { name: "SERVICES", uid: "service", sortable: true },
  { name: "INFORMATION", uid: "information" },
  { name: "ACTIONS", uid: "actions" },
];

const serviceOptions = [
  { name: "Marketing", uid: "marketing" },
  { name: "Branding", uid: "branding" },
  { name: "Designing", uid: "designing" },
];

const users = [
  // {
  //   id: 1,
  //   image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
  //   service: "marketing",
  //   information:
  //     "abcd abcd lorem ipsum 10 words line is not coming in this machine, this is machine is good to work but the things that useful for the development are not installed.",
  // },

  {
    id: 1,
    service: "marketing",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    information:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id egestas turpis. Nam eu pellentesque arcu. Maecenas sagittis id massa quis ullamcorper. Mauris convallis ipsum orci, quis scelerisque nibh pretium et. In dignissim ac elit nec interdum. Integer et ante ultrices, sodales nunc quis, cursus nulla. Pellentesque faucibus libero a interdum consectetur.",
  },
  {
    id: 2,
    service: "branding",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    information:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id egestas turpis. Nam eu pellentesque arcu. Maecenas sagittis id massa quis ullamcorper. Mauris convallis ipsum orci, quis scelerisque nibh pretium et. In dignissim ac elit nec interdum. Integer et ante ultrices, sodales nunc quis, cursus nulla. Pellentesque faucibus libero a interdum consectetur.",
  },
  {
    id: 3,
    service: "marketing",
    image: "https://i.pravatar.cc/150?u=a04258114e29026702d",
    information:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id egestas turpis. Nam eu pellentesque arcu. Maecenas sagittis id massa quis ullamcorper. Mauris convallis ipsum orci, quis scelerisque nibh pretium et. In dignissim ac elit nec interdum. Integer et ante ultrices, sodales nunc quis, cursus nulla. Pellentesque faucibus libero a interdum consectetur.",
  },
  {
    id: 4,
    service: "designing",
    image: "https://i.pravatar.cc/150?u=a048581f4e29026701d",
    information:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id egestas turpis. Nam eu pellentesque arcu. Maecenas sagittis id massa quis ullamcorper. Mauris convallis ipsum orci, quis scelerisque nibh pretium et. In dignissim ac elit nec interdum. Integer et ante ultrices, sodales nunc quis, cursus nulla. Pellentesque faucibus libero a interdum consectetur.",
  },
  {
    id: 5,
    service: "marketing",
    image: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    information:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id egestas turpis. Nam eu pellentesque arcu. Maecenas sagittis id massa quis ullamcorper. Mauris convallis ipsum orci, quis scelerisque nibh pretium et. In dignissim ac elit nec interdum. Integer et ante ultrices, sodales nunc quis, cursus nulla. Pellentesque faucibus libero a interdum consectetur.",
  },
  {
    id: 6,
    service: "designing",
    image: "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
    information:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id egestas turpis. Nam eu pellentesque arcu. Maecenas sagittis id massa quis ullamcorper. Mauris convallis ipsum orci, quis scelerisque nibh pretium et. In dignissim ac elit nec interdum. Integer et ante ultrices, sodales nunc quis, cursus nulla. Pellentesque faucibus libero a interdum consectetur.",
  },
  {
    id: 7,
    service: "branding",
    image: "https://i.pravatar.cc/150?u=a042581f4e29027007d",
    information:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id egestas turpis. Nam eu pellentesque arcu. Maecenas sagittis id massa quis ullamcorper. Mauris convallis ipsum orci, quis scelerisque nibh pretium et. In dignissim ac elit nec interdum. Integer et ante ultrices, sodales nunc quis, cursus nulla. Pellentesque faucibus libero a interdum consectetur.",
  },
  {
    id: 8,
    service: "marketing",
    image: "https://i.pravatar.cc/150?u=a042581f4e27027008d",
    information:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id egestas turpis. Nam eu pellentesque arcu. Maecenas sagittis id massa quis ullamcorper. Mauris convallis ipsum orci, quis scelerisque nibh pretium et. In dignissim ac elit nec interdum. Integer et ante ultrices, sodales nunc quis, cursus nulla. Pellentesque faucibus libero a interdum consectetur.",
  },
  {
    id: 9,
    service: "designing",
    image: "https://i.pravatar.cc/150?img=4",
    information:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id egestas turpis. Nam eu pellentesque arcu. Maecenas sagittis id massa quis ullamcorper. Mauris convallis ipsum orci, quis scelerisque nibh pretium et. In dignissim ac elit nec interdum. Integer et ante ultrices, sodales nunc quis, cursus nulla. Pellentesque faucibus libero a interdum consectetur.",
  },
  {
    id: 10,
    service: "marketing",
    image: "https://i.pravatar.cc/150?img=5",
    information:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id egestas turpis. Nam eu pellentesque arcu. Maecenas sagittis id massa quis ullamcorper. Mauris convallis ipsum orci, quis scelerisque nibh pretium et. In dignissim ac elit nec interdum. Integer et ante ultrices, sodales nunc quis, cursus nulla. Pellentesque faucibus libero a interdum consectetur.",
  },
  {
    id: 11,
    service: "marketing",
    image: "https://i.pravatar.cc/150?img=8",
    information:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id egestas turpis. Nam eu pellentesque arcu. Maecenas sagittis id massa quis ullamcorper. Mauris convallis ipsum orci, quis scelerisque nibh pretium et. In dignissim ac elit nec interdum. Integer et ante ultrices, sodales nunc quis, cursus nulla. Pellentesque faucibus libero a interdum consectetur.",
  },
  {
    id: 12,
    service: "branding",
    image: "https://i.pravatar.cc/150?img=10",
    information:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id egestas turpis. Nam eu pellentesque arcu. Maecenas sagittis id massa quis ullamcorper. Mauris convallis ipsum orci, quis scelerisque nibh pretium et. In dignissim ac elit nec interdum. Integer et ante ultrices, sodales nunc quis, cursus nulla. Pellentesque faucibus libero a interdum consectetur.",
  },
  {
    id: 13,
    service: "marketing",
    image: "https://i.pravatar.cc/150?img=12",
    information:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id egestas turpis. Nam eu pellentesque arcu. Maecenas sagittis id massa quis ullamcorper. Mauris convallis ipsum orci, quis scelerisque nibh pretium et. In dignissim ac elit nec interdum. Integer et ante ultrices, sodales nunc quis, cursus nulla. Pellentesque faucibus libero a interdum consectetur.",
  },
  {
    id: 14,
    service: "marketing",
    image: "https://i.pravatar.cc/150?img=16",
    information:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id egestas turpis. Nam eu pellentesque arcu. Maecenas sagittis id massa quis ullamcorper. Mauris convallis ipsum orci, quis scelerisque nibh pretium et. In dignissim ac elit nec interdum. Integer et ante ultrices, sodales nunc quis, cursus nulla. Pellentesque faucibus libero a interdum consectetur.",
  },
  {
    id: 15,
    service: "branding",
    image: "https://i.pravatar.cc/150?img=15",
    information:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id egestas turpis. Nam eu pellentesque arcu. Maecenas sagittis id massa quis ullamcorper. Mauris convallis ipsum orci, quis scelerisque nibh pretium et. In dignissim ac elit nec interdum. Integer et ante ultrices, sodales nunc quis, cursus nulla. Pellentesque faucibus libero a interdum consectetur.",
  },
  {
    id: 16,
    service: "marketing",
    image: "https://i.pravatar.cc/150?img=20",
    information:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id egestas turpis. Nam eu pellentesque arcu. Maecenas sagittis id massa quis ullamcorper. Mauris convallis ipsum orci, quis scelerisque nibh pretium et. In dignissim ac elit nec interdum. Integer et ante ultrices, sodales nunc quis, cursus nulla. Pellentesque faucibus libero a interdum consectetur.",
  },
  {
    id: 17,
    service: "marketing",
    image: "https://i.pravatar.cc/150?img=33",
    information:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id egestas turpis. Nam eu pellentesque arcu. Maecenas sagittis id massa quis ullamcorper. Mauris convallis ipsum orci, quis scelerisque nibh pretium et. In dignissim ac elit nec interdum. Integer et ante ultrices, sodales nunc quis, cursus nulla. Pellentesque faucibus libero a interdum consectetur.",
  },
  {
    id: 18,
    service: "marketing",
    image: "https://i.pravatar.cc/150?img=29",
    information:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id egestas turpis. Nam eu pellentesque arcu. Maecenas sagittis id massa quis ullamcorper. Mauris convallis ipsum orci, quis scelerisque nibh pretium et. In dignissim ac elit nec interdum. Integer et ante ultrices, sodales nunc quis, cursus nulla. Pellentesque faucibus libero a interdum consectetur.",
  },
  {
    id: 19,
    service: "branding",
    image: "https://i.pravatar.cc/150?img=50",
    information:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id egestas turpis. Nam eu pellentesque arcu. Maecenas sagittis id massa quis ullamcorper. Mauris convallis ipsum orci, quis scelerisque nibh pretium et. In dignissim ac elit nec interdum. Integer et ante ultrices, sodales nunc quis, cursus nulla. Pellentesque faucibus libero a interdum consectetur.",
  },
  {
    id: 20,
    service: "marketing",
    image: "https://i.pravatar.cc/150?img=45",
    information:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id egestas turpis. Nam eu pellentesque arcu. Maecenas sagittis id massa quis ullamcorper. Mauris convallis ipsum orci, quis scelerisque nibh pretium et. In dignissim ac elit nec interdum. Integer et ante ultrices, sodales nunc quis, cursus nulla. Pellentesque faucibus libero a interdum consectetur.",
  },
];

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const INITIAL_VISIBLE_COLUMNS = ["id", "image", "service", "information", "actions"];

export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
  const [serviceFilter, setServiceFilter] = React.useState("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: "id",
    direction: "ascending",
  });
  const [page, setPage] = React.useState(1);

  const pages = Math.ceil(users.length / rowsPerPage);

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...users];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user.information.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (serviceFilter !== "all" && Array.from(serviceFilter).length !== serviceOptions.length) {
      filteredUsers = filteredUsers.filter((user) => Array.from(serviceFilter).includes(user.service));
    }

    return filteredUsers;
  }, [filterValue, serviceFilter, hasSearchFilter]); // -user +hasSearchFilter

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "image":
        return (
          <div className="flex flex-col">
            {/* <p className="text-bold text-small capitalize">{cellValue}</p> */}
            {/* <p className="text-bold text-small capitalize">{user.service}</p> */}
            {/* <Image alt="" src={user.image} width={200} height={200} /> */}
            <img src={user.image} alt="" className="w-40 rounded-xl" />
          </div>
        );
      case "service":
        return (
          <div className="flex flex-col">
            {/* <p className="text-bold text-small capitalize">{cellValue}</p> */}
            <p className="text-bold text-small capitalize">{user.service}</p>
          </div>
        );
      case "actions":
        return (
          <div className="relative flex justify-end items-center gap-2">
            <Dropdown className="bg-background border-1 border-default-200">
              <DropdownTrigger>
                <Button isIconOnly radius="full" size="sm" variant="light">
                  <VerticalDotsIcon className="text-default-400" />
                </Button>
              </DropdownTrigger>
              <DropdownMenu className="text-black">
                <DropdownItem>View</DropdownItem>
                <DropdownItem>Edit</DropdownItem>
                <DropdownItem className="text-red-500">Delete</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const onRowsPerPageChange = React.useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = React.useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4 text-black">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            classNames={{
              base: "w-full sm:max-w-[44%]",
              inputWrapper: "border-1",
            }}
            placeholder="Search by name..."
            size="sm"
            startContent={<SearchIcon className="text-default-300" />}
            value={filterValue}
            variant="bordered"
            onClear={() => setFilterValue("")}
            onValueChange={onSearchChange}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<ChevronDownIcon className="text-small" />} size="sm" variant="flat">
                  Select Service
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={serviceFilter}
                selectionMode="multiple"
                onSelectionChange={setServiceFilter}
              >
                {serviceOptions.map((service) => (
                  <DropdownItem key={service.uid} className="capitalize text-black">
                    {capitalize(service.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<ChevronDownIcon className="text-small" />} size="sm" variant="flat">
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize text-black">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Button className="bg-foreground text-background" endContent={<PlusIcon />} size="sm" onPress={onOpen}>
              Add New
            </Button>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">Total {users.length} users</span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
              defaultValue={rowsPerPage}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    serviceFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    rowsPerPage, // +rowsperpage
    // users.length,
    // hasSearchFilter,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <Pagination
          showControls
          classNames={{
            cursor: "bg-foreground text-background",
          }}
          color="default"
          isDisabled={hasSearchFilter}
          page={page}
          total={pages}
          variant="light"
          onChange={setPage}
        />
        {false ? (
          <span className="text-small text-default-400">
            {selectedKeys === "all" ? "All items selected" : `${selectedKeys.size} of ${items.length} selected`}
          </span>
        ) : null}
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  const classNames = React.useMemo(
    () => ({
      wrapper: ["max-h-[382px]", "max-w-3xl"],
      th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
      td: [
        // changing the rows border radius
        // first
        "group-data-[first=true]:first:before:rounded-none",
        "group-data-[first=true]:last:before:rounded-none",
        // middle
        "group-data-[middle=true]:before:rounded-none",
        // last
        "group-data-[last=true]:first:before:rounded-none",
        "group-data-[last=true]:last:before:rounded-none",
      ],
    }),
    []
  );

  return (
    <>
      <Table
        isCompact
        removeWrapper
        aria-label="Example table with custom cells, pagination and sorting"
        bottomContent={bottomContent}
        bottomContentPlacement="outside"
        checkboxesProps={{
          classNames: {
            wrapper: "after:bg-foreground after:text-background text-background",
          },
        }}
        classNames={classNames}
        selectedKeys={selectedKeys}
        selectionMode="multiple"
        selectionBehavior="replace"
        sortDescriptor={sortDescriptor}
        topContent={topContent}
        topContentPlacement="outside"
        onSelectionChange={setSelectedKeys}
        onSortChange={setSortDescriptor}
      >
        <TableHeader columns={headerColumns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
              allowsSorting={column.sortable}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={"No users found"} items={sortedItems}>
          {(item) => (
            <TableRow key={item.id}>{(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}</TableRow>
          )}
        </TableBody>
      </Table>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="text-black">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit
                  venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non risus hendrerit
                  venenatis. Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit
                  dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris
                  do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

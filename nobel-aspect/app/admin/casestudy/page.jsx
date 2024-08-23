"use client";

import React, { useCallback, useEffect, useState } from "react";
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
import axios from "axios";

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
  { name: "ID", uid: "id" },
  { name: "IMAGE", uid: "image" },
  { name: "TITLE", uid: "casestudyTitle" },
  { name: "INFORMATION", uid: "information" },
  { name: "ACTIONS", uid: "actions" },
];

const serviceOptions = [
  { name: "Marketing", uid: "Digital Marketing" },
  { name: "Branding", uid: "Branding" },
  { name: "Designing", uid: "Designing" },
];

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const INITIAL_VISIBLE_COLUMNS = ["id", "image", "casestudyTitle", "information", "actions"];

export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalMode, setModalMode] = useState("add");
  const [modalData, setModalData] = useState({
    image: "",
    casestudyTitle: "",
    information: "",
  });

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/caseStudy/list");
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const modalOpen =
    ((mode = "add", user) => {
      const userData = user || {
        image: "",
        casestudyTitle: "",
        information: "",
      };

      onOpen();
      setModalData(userData);
      setModalMode(mode);
    },
    []);

  const handleChange = (e) => {
    setModalData({
      ...modalData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (onClose) => {
    try {
      const response = await axios.post("http://localhost:8000/caseStudy/create", modalData);
      console.log(response.data);
    } catch (err) {
      console.log(err.response?.data?.message || "Failed to add case study. Please try again later.");
    }
    onClose();
    fetchData();
  };

  const handleEditData = async (onClose) => {
    try {
      const response = await axios.put(`http://localhost:8000/caseStudy/edit/${modalData._id}`, modalData);
      console.log(response.data);
    } catch (err) {
      console.log(err.response?.data?.message || "Failed to edit case study. Please try again later.");
    }
    onClose();
    fetchData();
  };

  const deleteCaseStudy = useCallback(async (user) => {
    try {
      const response = await axios.delete(`http://localhost:8000/caseStudy/delete/${user._id}`);
      console.log(response.data);
    } catch (err) {
      console.log(err.response?.data?.message || "Failed to delete case study. Please try again later.");
    }
    fetchData();
  }, []);

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
      const searchQuery = filterValue.toLowerCase();

      filteredUsers = filteredUsers.filter(
        (user) =>
          user.information?.toLowerCase().includes(searchQuery) || user.image?.toLowerCase().includes(searchQuery)
      );
    }

    if (serviceFilter !== "all" && Array.from(serviceFilter).length !== serviceOptions.length) {
      filteredUsers = filteredUsers.filter((user) => Array.from(serviceFilter).includes(user.casestudyTitle));
    }

    return filteredUsers;
  }, [filterValue, serviceFilter, hasSearchFilter, users]); // -user +hasSearchFilter

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

  const renderCell = React.useCallback(
    (user, columnKey, index) => {
      const cellValue = user[columnKey];

      switch (columnKey) {
        case "id":
          return index + 1;
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
                  <DropdownItem onPress={() => modalOpen("view", user)}>View</DropdownItem>
                  <DropdownItem onPress={() => modalOpen("edit", user)}>Edit</DropdownItem>
                  <DropdownItem onPress={() => deleteCaseStudy(user)} className="text-red-500">
                    Delete
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
          );
        // case "information":
        //   return `${cellValue.slice(0, 60)}....`;
        default:
          return cellValue;
      }
    },
    [modalOpen, deleteCaseStudy]
  );

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
        <div className="flex justify-end gap-3 items-end">
          <Input
            isClearable
            classNames={{
              base: "w-full sm:max-w-[44%]",
              inputWrapper: "border-1",
            }}
            placeholder="Search"
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
                  Select Title
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
            <Button
              className="bg-foreground text-background"
              endContent={<PlusIcon />}
              size="sm"
              onPress={() => modalOpen("add")}
            >
              Add New
            </Button>
          </div>
        </div>
      </div>
    );
  }, [
    filterValue,
    serviceFilter,
    visibleColumns,
    onSearchChange,
    // onRowsPerPageChange,
    // rowsPerPage, // +rowsperpage
    // users.length,
    // hasSearchFilter,
    modalOpen,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <div className="flex justify-between items-center">
          {/* <span className="text-default-400 text-small">Total {users.length} users</span> */}
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
        <Pagination
          showControls
          classNames={{
            cursor: "bg-[#067A49] text-background",
          }}
          color="default"
          isDisabled={hasSearchFilter}
          page={page}
          total={pages}
          variant="flat"
          onChange={setPage}
        />
        {false ? (
          <span className="text-small text-default-400">
            {selectedKeys === "all" ? "All items selected" : `${selectedKeys.size} of ${items.length} selected`}
          </span>
        ) : null}
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter, onRowsPerPageChange, rowsPerPage]);

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
      {loading ? (
        "Loading..."
      ) : (
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
            // sortDescriptor={sortDescriptor}
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
            <TableBody emptyContent={"No users found"} items={items}>
              {items.map((item, index) => (
                <TableRow key={item._id}>
                  {(columnKey) => (
                    <TableCell>{renderCell(item, columnKey, rowsPerPage * (page - 1) + index)}</TableCell>
                  )}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="text-black">
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    {modalMode === "add"
                      ? "Add Case Study"
                      : modalMode === "edit"
                      ? "Edit Case Study"
                      : // : modalMode === "delete"
                        // ? "Delete this enquiry"
                        "View Case Study"}
                  </ModalHeader>
                  <ModalBody>
                    <form className="space-y-4">
                      <div className="w-full">
                        <label
                          htmlFor="casestudyTitle"
                          className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300"
                        >
                          Select title
                        </label>
                        <select
                          name="casestudyTitle"
                          id="casestudyTitle"
                          value={modalData.casestudyTitle}
                          onChange={handleChange}
                          disabled={modalMode == "view"}
                          className="block w-full p-3 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required
                        >
                          <option value="Select Field">Select Field</option>
                          <option value="Digital Marketing">Digital Marketing</option>
                          <option value="Branding">Branding</option>
                          <option value="Designing">Designing</option>
                        </select>
                      </div>
                      <div className="w-full">
                        <label
                          htmlFor="image"
                          className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300"
                        >
                          Image
                        </label>
                        <select
                          name="image"
                          id="image"
                          value={modalData.image}
                          onChange={handleChange}
                          disabled={modalMode == "view"}
                          className="block w-full p-3 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          required
                        >
                          <option value="Add image">Add image</option>
                          <option value="Person">Person</option>
                          <option value="Company">Company</option>
                          <option value="Both">Both</option>
                        </select>
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="information"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                        >
                          Information
                        </label>
                        <textarea
                          id="information"
                          rows="3"
                          value={modalData.information}
                          onChange={handleChange}
                          disabled={modalMode == "view"}
                          className="block p-2.5 w-full text-sm text-gray-900 bg-white resize-none rounded-lg shadow-sm border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Add information"
                          required
                        ></textarea>
                      </div>
                    </form>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    {modalMode == "add" ? (
                      <Button color="primary" onPress={() => handleSubmit(onClose)}>
                        Add Case Study
                      </Button>
                    ) : (
                      modalMode == "edit" && (
                        <Button color="primary" onPress={() => handleEditData(onClose)}>
                          Edit Case Study
                        </Button>
                      )
                    )}
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </>
      )}
    </>
  );
}

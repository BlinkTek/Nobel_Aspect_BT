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
  { name: "TITLE", uid: "serviceTitle" },
  { name: "INFORMATION", uid: "information" },
  { name: "ACTIONS", uid: "actions" },
];

const serviceOptions = [
  { name: "Marketing", uid: "Digital Marketing" },
  { name: "Branding", uid: "Branding" },
  { name: "Design", uid: "Design" },
];

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const INITIAL_VISIBLE_COLUMNS = ["id", "image", "serviceTitle", "information", "actions"];

export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [modalMode, setModalMode] = useState("add");
  const [modalData, setModalData] = useState({
    image: "",
    serviceTitle: "",
    information: "",
    features: [],
  });

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}service/list`);
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

  const modalOpen = useCallback(
    (mode = "add", user) => {
      const userData = user || {
        image: "",
        serviceTitle: "",
        information: "",
        features: [],
      };

      onOpen();
      setModalData(userData);
      setModalMode(mode);
    },
    [onOpen]
  );

  const addFeature = () => {
    setModalData((prevState) => ({
      ...prevState,
      features: [...(prevState.features || []), ""],
    }));
  };

  const handleChange = (e) => {
    const { id, value, files } = e.target;

    if (id === "image") {
      // Handle file input
      setModalData({
        ...modalData,
        [id]: files[0], // Assuming you only want the first file
      });
    } else if (id === "features") {
      // Example handling for updating an array item
      const index = parseInt(e.target.dataset.index); // assuming you use data-index for identifying items
      console.log(index);
      const newFeatures = [...(modalData.features || [])];
      console.log(newFeatures);
      newFeatures[index] = value;
      setModalData({
        ...modalData,
        features: newFeatures,
      });
      console.log({
        ...modalData,
        features: newFeatures,
      });
    } else {
      setModalData({
        ...modalData,
        [id]: value,
      });
    }
  };

  const handleSubmit = async (onClose) => {
    try {
      // Create a FormData object
      const formData = new FormData();
      formData.append("serviceTitle", modalData.serviceTitle);
      formData.append("information", modalData.information);
      formData.append("features", JSON.stringify(modalData.features));

      // Check if there is a file and append it
      if (modalData.image) {
        formData.append("image", modalData.image);
      }

      // Send the form data to the server
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}service/create`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
    } catch (err) {
      console.log(err.response?.data?.message || "Failed to add case study. Please try again later.");
    }

    // Close the modal and fetch data
    onClose();
    fetchData();
  };

  const handleEditData = async (onClose) => {
    try {
      const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}service/edit/${modalData._id}`, modalData);
      console.log(response.data);
    } catch (err) {
      console.log(err.response?.data?.message || "Failed to edit serice. Please try again later.");
    }
    onClose();
    fetchData();
  };

  const deleteService = useCallback(async (user) => {
    try {
      const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}service/delete/${user._id}`);
      console.log(response.data);
    } catch (err) {
      console.log(err.response?.data?.message || "Failed to delete service. Please try again later.");
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
      filteredUsers = filteredUsers.filter((user) => Array.from(serviceFilter).includes(user.serviceTitle));
    }

    return filteredUsers;
  }, [filterValue, serviceFilter, hasSearchFilter, users]); // -user +hasSearchFilter

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end).reverse();
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
              <button
                type="button"
                className="text-white bg-slate-500 hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => modalOpen("view", user)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15">
                  <path
                    fill="currentColor"
                    d="m.5 7.5l-.464-.186a.5.5 0 0 0 0 .372zm14 0l.464.186a.5.5 0 0 0 0-.372zm-7 4.5c-2.314 0-3.939-1.152-5.003-2.334a9.4 9.4 0 0 1-1.449-2.164l-.08-.18l-.004-.007v-.001L.5 7.5l-.464.186v.002l.003.004l.026.063l.078.173a10.4 10.4 0 0 0 1.61 2.406C2.94 11.653 4.814 13 7.5 13zm-7-4.5l.464.186l.004-.008a3 3 0 0 1 .08-.18a9.4 9.4 0 0 1 1.449-2.164C3.56 4.152 5.186 3 7.5 3V2C4.814 2 2.939 3.348 1.753 4.666a10.4 10.4 0 0 0-1.61 2.406a6 6 0 0 0-.104.236l-.002.004v.001H.035zm7-4.5c2.314 0 3.939 1.152 5.003 2.334a9.4 9.4 0 0 1 1.449 2.164l.08.18l.004.007v.001L14.5 7.5l.464-.186v-.002l-.003-.004l-.026-.063l-.078-.173a10.4 10.4 0 0 0-1.61-2.406C12.06 3.348 10.186 2 7.5 2zm7 4.5l-.464-.186l-.003.008l-.015.035l-.066.145a9.4 9.4 0 0 1-1.449 2.164C11.44 10.848 9.814 12 7.5 12v1c2.686 0 4.561-1.348 5.747-2.665a10.4 10.4 0 0 0 1.61-2.407a6 6 0 0 0 .104-.236l.002-.004v-.001h.001zM7.5 9A1.5 1.5 0 0 1 6 7.5H5A2.5 2.5 0 0 0 7.5 10zM9 7.5A1.5 1.5 0 0 1 7.5 9v1A2.5 2.5 0 0 0 10 7.5zM7.5 6A1.5 1.5 0 0 1 9 7.5h1A2.5 2.5 0 0 0 7.5 5zm0-1A2.5 2.5 0 0 0 5 7.5h1A1.5 1.5 0 0 1 7.5 6z"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="text-white bg-slate-500 hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => modalOpen("edit", user)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 28 28">
                  <path
                    fill="currentColor"
                    d="M24.85 3.15a3.93 3.93 0 0 0-5.561 0L4.503 17.937c-.44.44-.76.986-.928 1.586l-1.547 5.525a.75.75 0 0 0 .924.924l5.524-1.547a3.6 3.6 0 0 0 1.587-.928L24.85 8.71a3.93 3.93 0 0 0 0-5.56m-4.5 1.06a2.432 2.432 0 1 1 3.439 3.44l-1.54 1.539l-3.439-3.44zm-2.6 2.6l3.44 3.44L9.002 22.437a2.1 2.1 0 0 1-.93.544l-4.241 1.187l1.187-4.24a2.13 2.13 0 0 1 .544-.93z"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="text-white bg-slate-500 hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => deleteService(user)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32">
                  <path
                    fill="currentColor"
                    d="M13.5 6.5V7h5v-.5a2.5 2.5 0 0 0-5 0m-2 .5v-.5a4.5 4.5 0 1 1 9 0V7H28a1 1 0 1 1 0 2h-1.508L24.6 25.568A5 5 0 0 1 19.63 30h-7.26a5 5 0 0 1-4.97-4.432L5.508 9H4a1 1 0 0 1 0-2zm2.5 6.5a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0zm5-1a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0v-10a1 1 0 0 0-1-1"
                  />
                </svg>
              </button>
            </div>
          );
        case "image":
          return <Image src={cellValue} alt="" width={100} height={50} />;
        case "information":
          return `${cellValue.slice(0, 45)}...`;
        default:
          return cellValue;
      }
    },
    [deleteService, modalOpen]
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
  }, [selectedKeys, items.length, page, pages, hasSearchFilter, onRowsPerPageChange, rowsPerPage, users.length]);

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
                  {(columnKey) => <TableCell>{renderCell(item, columnKey, index)}</TableCell>}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Modal isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior="inside" size="2xl" className="text-black">
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1">
                    {modalMode === "add"
                      ? "Add Service"
                      : modalMode === "edit"
                      ? "Edit Service"
                      : // : modalMode === "delete"
                        // ? "Delete this enquiry"
                        "View Service"}
                  </ModalHeader>
                  <ModalBody>
                    <form className="space-y-4">
                      <div className="w-full">
                        <label
                          htmlFor="serviceTitle"
                          className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300"
                        >
                          Service title
                        </label>
                        <input
                          type="text"
                          name="serviceTitle"
                          id="serviceTitle"
                          value={modalData.serviceTitle}
                          onChange={handleChange}
                          disabled={modalMode == "view"}
                          className="block w-full p-3 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Enter Field"
                          required
                        />
                      </div>
                      <div className="w-full">
                        <label
                          htmlFor="image"
                          className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300"
                        >
                          Image
                        </label>
                        <input
                          type="file"
                          name="image"
                          id="image"
                          onChange={handleChange}
                          disabled={modalMode == "view"}
                          className="block w-full p-3 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          accept="image/*"
                          required
                        />
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
                          className="block mb-2 p-2.5 w-full text-sm text-gray-900 bg-white resize-none rounded-lg shadow-sm border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Add information"
                          required
                        ></textarea>

                        <label
                          htmlFor="image"
                          className="block mb-2 text-sm font-semibold text-gray-900 dark:text-gray-300"
                        >
                          Features
                        </label>
                        {modalData.features?.map((feature, index) => (
                          <input
                            key={index}
                            type="text"
                            name="features"
                            id="features"
                            data-index={index}
                            value={feature}
                            onChange={handleChange}
                            placeholder={`Feature ${index + 1}`}
                            disabled={modalMode == "view"}
                            className="block w-full p-3 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required
                          />
                        ))}
                        <button type="button" onClick={addFeature}>
                          Add Feature
                        </button>
                      </div>
                    </form>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                    {modalMode == "add" ? (
                      <Button color="primary" onPress={() => handleSubmit(onClose)}>
                        Add Service
                      </Button>
                    ) : (
                      modalMode == "edit" && (
                        <Button color="primary" onPress={() => handleEditData(onClose)}>
                          Edit Service
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

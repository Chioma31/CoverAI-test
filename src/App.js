
import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  BellIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'

const navigation = [
  { name: 'Dashboard', href: '#', icon: HomeIcon, current: false },
  { name: 'Cover Letters', href: '#', icon: UsersIcon, current: true },
  { name: 'CV/Resume', href: '#', icon: FolderIcon, current: false },
  { name: 'Interview Prep', href: '#', icon: CalendarIcon, current: false },
  { name: 'Contacts', href: '#', icon: DocumentDuplicateIcon, current: false },
  { name: 'Job Tracker', href: '#', icon: ChartPieIcon, current: false },
]
const teams = [
  { id: 1, name: 'Get Extension', href: '#', initial: 'H', current: false },
  { id: 2, name: 'Refer & Earn', href: '#', initial: 'T', current: false },
  { id: 3, name: 'Help & Support', href: '#', initial: 'W', current: false },
  { id: 3, name: ' Log out', href: '#', initial: 'W', current: false },
]
const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-50 lg:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-900/80" />
            </Transition.Child>

            <div className="fixed inset-0 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                      <button type="button" className="-m-2.5 p-2.5" onClick={() => setSidebarOpen(false)}>
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  {/* Sidebar component, swap this element with another sidebar if you like */}
                  <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                    <div className="flex h-16 shrink-0 items-center">
                      <img
                        className="h-8 w-auto"
                        src="/logo.svg"
                        alt="Your Company"
                      />
                    </div>
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col gap-y-7">
                        <li>
                          <ul role="list" className="-mx-2 space-y-1">
                            {navigation.map((item) => (
                              <li key={item.name}>
                                <a
                                  href={item.href}
                                  className={classNames(
                                    item.current
                                      ? 'bg-gray-50 text-[#664EDE]'
                                      : 'text-gray-700 hover:text-[#664EDE] hover:bg-gray-50',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  )}
                                >
                                  <item.icon
                                    className={classNames(
                                      item.current ? 'text-[#664EDE]' : 'text-gray-400 group-hover:text-[#664EDE]',
                                      'h-6 w-6 shrink-0'
                                    )}
                                    aria-hidden="true"
                                  />
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        <li>
                          <div className="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
                          <ul role="list" className="-mx-2 mt-2 space-y-1">
                            {teams.map((team) => (
                              <li key={team.name}>
                                <a
                                  href={team.href}
                                  className={classNames(
                                    team.current
                                      ? 'bg-gray-50 text-[#664EDE]'
                                      : 'text-gray-700 hover:text-[#664EDE] hover:bg-gray-50',
                                    'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                                  )}
                                >
                                  <span
                                    className={classNames(
                                      team.current
                                        ? 'text-[#664EDE] border-[#664EDE]'
                                        : 'text-gray-400 border-gray-200 group-hover:border-[#664EDE] group-hover:text-[#664EDE]',
                                      'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white'
                                    )}
                                  >
                                    {team.initial}
                                  </span>
                                  <span className="truncate">{team.name}</span>
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                        
                      </ul>
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
            <div className="flex h-16 shrink-0 items-center">
              <img
                className="h-8 w-auto"
                src="/logo.svg"
                alt="Your Company"
              />
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col justify-between">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-50 text-[#664EDE] border-l-4 border-[#664EDE]'
                              : 'text-gray-700 hover:text-[#664EDE] hover:bg-gray-50',
                            'group flex gap-x-3 font-[400] text-[14px]  rounded-md p-2 text-sm leading-6 '
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current ? 'text-[#664EDE]' : 'text-gray-400 group-hover:text-[#664EDE]',
                              'h-6 w-6 shrink-0'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <ul role="list" className="-mx-2 mt-2 space-y-1">
                    {teams.map((team) => (
                      <li key={team.name}>
                        <a
                          href={team.href}
                          className={classNames(
                            team.current
                              ? 'bg-gray-50 text-[#664EDE]'
                              : 'text-gray-700 hover:text-[#664EDE] hover:bg-gray-50',
                            'group flex gap-x-3 rounded-md font-[400] text-[14px] p-2 text-sm leading-6'
                          )}
                        >
                          <span
                            className={classNames(
                              team.current
                                ? 'text-[#664EDE] border-[#664EDE]'
                                : 'text-gray-400 border-gray-200 group-hover:border-[#664EDE] group-hover:text-[#664EDE]',
                              'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white'
                            )}
                          >
                            {team.initial}
                          </span>
                          <span className="truncate">{team.name}</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
                
              </ul>
            </nav>
          </div>
        </div>

        <div className="lg:pl-72  h-screen">
          <div className="sticky top-0 z-40 lg:mx-auto  lg:px-16">
            <div className="flex h-16 items-center gap-x-4  bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-0 lg:shadow-none">
              <button
                type="button"
                className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>

              {/* Separator */}
              <div className="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />

              <div className="flex flex-1 justify-between  lg:gap-x-6 items-center">
                <div className='flex gap-3'>
                  <div className='text-gray-400'>Coverletters </div>
                  <div>/</div>
                  <div>Home</div>
                </div>
                <div className="flex items-center gap-x-4 lg:gap-x-6 text-[#3F4E72]">
                  <div className='flex gap-2 items-center'>
                    <div>Credit left:</div>
                    <div className='flex'>10 <img src='money.svg'/></div>
                    <button className='bg-[#EEEFF0] text-[#3F4E72] px-2 py-1 rounded-full'>Free plan</button>
                  </div>
                  <button type="button" className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Separator */}
                  <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" aria-hidden="true" />

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative">
                    <Menu.Button className="-m-1.5 flex items-center p-1.5">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full bg-gray-50"
                        src="/man.svg"
                        alt=""
                      />
                      
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? 'bg-gray-50' : '',
                                  'block px-3 py-1 text-sm leading-6 text-gray-900'
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </div>
          <div className='border-b border-gray-200'></div>

          <main className="py-10 bg-[#FAFBFC]">
            <div className="mx-auto  px-4 sm:px-6 lg:px-16  ">
              <div className='font-[600] text-[30px] mb-2'>Hello, Chris!</div>
              <div className='font-[400] text-[14px]' >It’s time to land your next role. Let’s get to it!</div>
              <div className='border border-gray-100 bg-white shadow-sm mt-9 rounded-lg '>
                <div className='flex justify-between p-5'>
                  <div className='flex items-center gap-4'>
                    <div className='font-[500] text-[18px] '>Getting Started</div>
                    <div className='bg-gray-200 px-2 py-[5px] text-[12px] rounded-md text-[#3F4E72]'>Step 1 out of 4</div>
                  </div>
                  <div className='flex items-center'>
                    <div className='px-[10px] text-[12px] text-white py-1 rounded-full bg-[#563BDB]'>1</div>
                    <div className=' px-2 py-[1px] bg-gray-300'></div>
                    <div className='px-[10px] text-[12px]  py-1 rounded-full text-[#563BDB] bg-gray-100'>2</div>
                    <div className=' px-2 py-[1px] bg-gray-300'></div>
                    <div className='px-[10px] text-[12px]  py-1 rounded-full text-[#563BDB] bg-gray-100'>3</div>
                    <div className=' px-2 py-[1px] bg-gray-300'></div>
                    <div className='px-[10px] text-[12px]  py-1 rounded-full text-[#563BDB] bg-gray-100'>4</div>
                  </div>

                </div>
                <div className='border border-gray-100'></div>
                
                <div className='p-5 mt-16 mb-40 text-center flex flex-col justify-center'>
                  <div className='font-[600] text-[18px] '>Get familiar with Accountable</div>
                  <div className='font-[400] text-[14px] text-[#585858] '>Let’s get you started with Accountable through a simple <br/> walkthrough guide that explains how it works.</div>
                  <div className='flex gap-3 items-center justify-center mt-10'>
                    <button className='text-white bg-[#563BDB] px-3 py-2 rounded-lg'>New CV/Resume</button>
                    <button className='border border-[#563BDB]  px-3 py-2 rounded-lg bg-white text-[#563BDB]'>New Coverletter</button>
                  </div>
                  
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

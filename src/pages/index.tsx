import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'

/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  const [selectedTab, setSelectedTab] = useState('all')

  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>
        <Tabs.Root
          value={selectedTab}
          onValueChange={setSelectedTab}
          className="TabsRoot pt-10"
          defaultValue="all"
        >
          <Tabs.List className="TabsList" aria-label="Manage your account">
            <Tabs.Trigger
              className={`mr-2 rounded-full px-[24px] py-[12px] ${
                selectedTab === 'all'
                  ? 'bg-[#334155] text-white'
                  : 'border border-[#E2E8F0]'
              }`}
              value="all"
            >
              All
            </Tabs.Trigger>
            <Tabs.Trigger
              className={`mr-2 rounded-full px-[24px] py-[12px] ${
                selectedTab === 'pending'
                  ? 'bg-[#334155] text-white'
                  : 'border border-[#E2E8F0]'
              }`}
              value="pending"
            >
              Pending
            </Tabs.Trigger>
            <Tabs.Trigger
              className={`rounded-full px-[24px] py-[12px] ${
                selectedTab === 'completed'
                  ? 'bg-[#334155] text-white'
                  : 'border border-[#E2E8F0]'
              }`}
              value="completed"
            >
              Completed
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content className="TabsContent" value="all">
            <div className="pt-10">
              <TodoList status="all" />
            </div>
          </Tabs.Content>
          <Tabs.Content className="TabsContent" value="pending">
            <div className="pt-10">
              <TodoList status="pending" />
            </div>
          </Tabs.Content>
          <Tabs.Content className="TabsContent" value="completed">
            <div className="pt-10">
              <TodoList status="completed" />
            </div>
          </Tabs.Content>
        </Tabs.Root>
        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index

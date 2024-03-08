'use client';

import { Button, Timeline } from 'flowbite-react';
import { HiArrowNarrowRight, HiCalendar  } from 'react-icons/hi';
import React from 'react'

export default function TimelineUi() {
  return (
    <div className=' mt-6 ml-3 mr-3 mb-6'>
      <Timeline horizontal>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>February 2024</Timeline.Time>
          <Timeline.Title className=' text-gray-300 font-bold'>The News of TimeOfIndia</Timeline.Title>
          <Timeline.Body>
            Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
            E-commerce & Marketing pages.
          </Timeline.Body>
          <Button color="blue">
            Learn More
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>March 2024</Timeline.Time>
          <Timeline.Title className=' text-gray-300 font-bold'>The Leaduing Role This Company</Timeline.Title>
          <Timeline.Body>
            All of the pages and components are first designed in Figma and we keep a parity between the two versions
            even as we update the project.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} />
        <Timeline.Content>
          <Timeline.Time>April 2024</Timeline.Time>
          <Timeline.Title className=' text-gray-300 font-bold'>Comming Soons</Timeline.Title>
          <Timeline.Body>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos rem nihil voluptates, similique fugiat incidunt soluta a.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
    </div>
  )
}

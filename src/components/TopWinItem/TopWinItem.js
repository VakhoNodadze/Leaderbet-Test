import React from 'react'
import {
  Container, ContentItem, TopWinHeader, TopWinContentItem, Button
} from './styled'
import { Cherry, Time, Person } from '../primitives/Icon'

const TopWinItem = () => (
    <>
      <TopWinHeader>
        <TopWinContentItem>
          <span>Number</span>
        </TopWinContentItem>
        <TopWinContentItem>
          <span>Time</span>
        </TopWinContentItem>
        <TopWinContentItem>
          <span>Coeficient</span>
        </TopWinContentItem>
        <TopWinContentItem>
          <span>Users</span>
        </TopWinContentItem>
        <TopWinContentItem>
          <span>Won Money</span>
        </TopWinContentItem>
      </TopWinHeader>
      {[...Array(8)].map((_, index) => (
        <Container key={index}>
          <ContentItem>
            <Cherry />
            <div style={{
              height: '0.8rem', width: 3, backgroundColor: '#383946', margin: '0 1.7rem 0 0.9rem'
            }}
            />
                  #4412452
          </ContentItem>
          <ContentItem>
            <Time />
                  #12:37
          </ContentItem>
          <ContentItem>
            <Button>
              2.37
            </Button>
          </ContentItem>
          <ContentItem>
            <Person full margin="0 5px 0 0" />
            <p style={{
              margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 70
            }}
            >Vakhtang Nodadze
            </p>
          </ContentItem>
          <ContentItem>
            <Button money>
              2.37
            </Button>
          </ContentItem>
        </Container>))}
        </>
)

export default TopWinItem

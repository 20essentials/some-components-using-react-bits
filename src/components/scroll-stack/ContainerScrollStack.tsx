import ScrollStack, { ScrollStackItem } from './ScrollStack';

export const ContainerScrollStack = () => {
  return (
    <article className='ContainerScrollStack'>
      <ScrollStack>
        <ScrollStackItem>
          <h2>Card 1</h2>
        </ScrollStackItem>
        <ScrollStackItem>
          <h2>Card 2</h2>
        </ScrollStackItem>
        <ScrollStackItem>
          <h2>Card 3</h2>
        </ScrollStackItem>
      </ScrollStack>
    </article>
  );
};

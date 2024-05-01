import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { Group, Text, rem, Table } from '@mantine/core';
import { IconUpload, IconPhoto, IconX } from '@tabler/icons-react';
import { Dropzone, DropzoneProps, MIME_TYPES } from '@mantine/dropzone';

export function HomePage() {
  const tableData = {
    caption: 'Some elements from periodic table',
    head: ['Element position', 'Atomic mass', 'Symbol', 'Element name'],
    body: [
      [6, 12.011, 'C', <Text>Carbon</Text>],
      [7, 14.007, 'N', 'Nitrogen'],
      [39, 88.906, 'Y', 'Yttrium'],
      [56, 137.33, 'Ba', 'Barium'],
      [58, 140.12, 'Ce', 'Cerium'],
    ]
  };
  return (
    <>
      <Welcome />
      {/* <ColorSchemeToggle /> */}
      <Dropzone maw={rem(900)} ml='auto' mr='auto' mt='xl'
        onDrop={(files) => console.log('accepted files', files)}
        onReject={(files) => console.log('rejected files', files)}
        maxSize={5 * 1024 ** 2}
        accept={[MIME_TYPES.csv]}
      >
        <Group justify="center" gap="xl" mih={220} style={{ pointerEvents: 'none' }}>
          <Dropzone.Accept>
            <IconUpload
              style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-blue-6)' }}
              stroke={1.5}
            />
          </Dropzone.Accept>
          <Dropzone.Reject>
            <IconX
              style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-red-6)' }}
              stroke={1.5}
            />
          </Dropzone.Reject>
          <Dropzone.Idle>
            <IconPhoto
              style={{ width: rem(52), height: rem(52), color: 'var(--mantine-color-dimmed)' }}
              stroke={1.5}
            />
          </Dropzone.Idle>

          <div>
            <Text size="xl" inline>
              Drag images here or click to select files
            </Text>
            <Text size="sm" c="dimmed" inline mt={7}>
              Attach as many files as you like, each file should not exceed 5mb
            </Text>
          </div>
        </Group>
      </Dropzone>

      <Table data={tableData} />

    </>
  );
}

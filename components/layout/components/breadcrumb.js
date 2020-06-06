import Link from 'next/link';
import { Breadcrumb } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

import usePathSegments from '../../../core/hooks/use-path-segments';

const { Item } = Breadcrumb;

const BreadcrumbWrapper = () => {
  const segments = usePathSegments(<HomeOutlined />);
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      {segments.map(({ url, name }) => (
        <Item key={url} style={{ textTransform: 'capitalize' }}>
          <Link href={url}>
            <a>{name}</a>
          </Link>
        </Item>
      ))}
    </Breadcrumb>
  );
};

export default BreadcrumbWrapper;
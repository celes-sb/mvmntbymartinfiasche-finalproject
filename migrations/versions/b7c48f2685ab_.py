"""empty message

Revision ID: b7c48f2685ab
Revises: 
Create Date: 2023-05-06 18:25:56.692495

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'b7c48f2685ab'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('programs', schema=None) as batch_op:
        batch_op.alter_column('load',
               existing_type=sa.REAL(),
               type_=sa.Float(precision=10),
               existing_nullable=True)

    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.alter_column('height',
               existing_type=sa.REAL(),
               type_=sa.Float(precision=10),
               existing_nullable=True)
        batch_op.alter_column('weight',
               existing_type=sa.REAL(),
               type_=sa.Float(precision=10),
               existing_nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.alter_column('weight',
               existing_type=sa.Float(precision=10),
               type_=sa.REAL(),
               existing_nullable=True)
        batch_op.alter_column('height',
               existing_type=sa.Float(precision=10),
               type_=sa.REAL(),
               existing_nullable=True)

    with op.batch_alter_table('programs', schema=None) as batch_op:
        batch_op.alter_column('load',
               existing_type=sa.Float(precision=10),
               type_=sa.REAL(),
               existing_nullable=True)

    # ### end Alembic commands ###